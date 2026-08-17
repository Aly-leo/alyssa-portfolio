import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

type Status = 'idle' | 'sending' | 'ok' | 'error';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private contact = inject(ContactService);

  readonly status = signal<Status>('idle');
  readonly errorMsg = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: [''], // honeypot anti-bot
  });

  get f() {
    return this.form.controls;
  }

  isInvalid(field: 'name' | 'email' | 'message'): boolean {
    const c = this.f[field];
    return c.invalid && (c.dirty || c.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('sending');
    this.errorMsg.set(null);

    this.contact.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('ok');
        this.form.reset();
      },
      error: (err) => {
        this.status.set('error');
        this.errorMsg.set(
          err?.error?.error ?? "Un problème est survenu. Réessaie ou écris-moi directement.",
        );
      },
    });
  }

  reset(): void {
    this.status.set('idle');
    this.errorMsg.set(null);
  }
}
