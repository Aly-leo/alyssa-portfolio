import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * [appReveal] — révèle un élément quand il entre dans le viewport.
 * Léger, single-observer, unobserve après animation.
 *
 * Options :
 *  - appReveal (delay ms, ex : "80")
 *  - appRevealFrom ('up' | 'down' | 'left' | 'right' | 'scale')
 *
 * Respecte prefers-reduced-motion.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  @Input('appReveal') delay: number | string = 0;
  @Input('appRevealFrom') from: 'up' | 'down' | 'left' | 'right' | 'scale' = 'up';

  ngOnInit(): void {
    const node = this.el.nativeElement;

    // Reduced motion → apparition instantanée
    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('reveal', 'is-visible');
      return;
    }

    node.classList.add('reveal', `reveal--${this.from}`);
    if (this.delay) {
      node.style.setProperty('--reveal-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible');
            this.observer?.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
