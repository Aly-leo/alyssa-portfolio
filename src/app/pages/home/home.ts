import { Component, inject, signal } from '@angular/core';
import { PROJECTS, STACK, SOCIALS, CONTENT_PLATFORMS, WISTEM } from '../../data/projects';
import { ThemeService } from '../../services/theme.service';
import { SocialIcon } from '../../shared/social-icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SocialIcon, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private themeService = inject(ThemeService);

  readonly projects = PROJECTS;
  readonly stack = STACK;
  readonly socials = SOCIALS;
  readonly platforms = CONTENT_PLATFORMS;
  readonly wistem = WISTEM;
  readonly currentYear = new Date().getFullYear();
  readonly theme = this.themeService.theme;
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
  closeMenu() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      document.body.style.overflow = '';
    }
  }

  readonly floatingIcons = [
    { label: 'JS', color: '#f7df1e', top: '8%', left: '-4%', delay: '0s' },
    { label: 'TS', color: '#3178c6', top: '18%', right: '-6%', delay: '.4s' },
    { label: 'PY', color: '#3776ab', bottom: '18%', left: '-8%', delay: '.8s' },
    { label: 'C#', color: '#68217a', bottom: '4%', right: '-4%', delay: '1.2s' },
    { label: 'A', color: '#dd0031', top: '-6%', right: '32%', delay: '.2s' },
    { label: '</>', color: '#7c3aed', bottom: '-6%', left: '32%', delay: '.6s' },
    { label: 'GIT', color: '#f05032', top: '48%', right: '-10%', delay: '1s' },
  ];

  toggleTheme() {
    this.themeService.toggle();
  }

  scrollTo(id: string) {
    this.closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
