import { Component, OnInit, signal, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome implements OnInit, OnDestroy {
  private router = inject(Router);

  readonly lines = [
    { prompt: '> initialisation.sh', text: 'Bonjour et bienvenue…' },
    { prompt: '> user.identify()', text: 'Je suis Alyssa Nkolo.' },
    { prompt: '> role.load()', text: 'Développeuse, mais pas que.' },
    { prompt: '> portfolio.launch()', text: 'Préparez-vous, ça arrive.' },
  ];

  readonly typed = signal<string[]>(['', '', '', '']);
  readonly currentLine = signal(0);
  readonly currentChar = signal(0);
  readonly showCursor = signal(true);
  readonly fading = signal(false);
  readonly loaded = signal(false);

  private typingId: any = null;
  private cursorId: any = null;

  ngOnInit(): void {
    // laisse l'animation d'entrée respirer
    setTimeout(() => this.loaded.set(true), 60);
    this.cursorId = setInterval(() => this.showCursor.update((v) => !v), 480);
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingId) clearTimeout(this.typingId);
    if (this.cursorId) clearInterval(this.cursorId);
  }

  private startTyping(): void {
    const line = this.currentLine();
    if (line >= this.lines.length) {
      // Fin — pause, fondu, puis navigation
      this.typingId = setTimeout(() => {
        this.fading.set(true);
        this.typingId = setTimeout(() => {
          this.router.navigateByUrl('/portfolio');
        }, 900);
      }, 700);
      return;
    }

    const target = this.lines[line].text;
    const char = this.currentChar();

    if (char < target.length) {
      const nextChar = target.charAt(char);
      const arr = [...this.typed()];
      arr[line] = target.substring(0, char + 1);
      this.typed.set(arr);
      this.currentChar.set(char + 1);
      // rythme naturel — plus long après ponctuation
      const delay = /[\.,\!\?]/.test(nextChar) ? 220 : 42 + Math.floor(Math.random() * 40);
      this.typingId = setTimeout(() => this.startTyping(), delay);
    } else {
      // Ligne finie — pause puis passe à la suivante
      this.currentLine.set(line + 1);
      this.currentChar.set(0);
      this.typingId = setTimeout(() => this.startTyping(), 380);
    }
  }

  skip(): void {
    if (this.typingId) clearTimeout(this.typingId);
    this.fading.set(true);
    setTimeout(() => this.router.navigateByUrl('/portfolio'), 400);
  }
}
