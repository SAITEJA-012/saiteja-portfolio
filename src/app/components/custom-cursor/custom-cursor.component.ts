import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [`
    :host {
      display: none;
    }
  `]
})
export class CustomCursorComponent implements AfterViewInit, OnDestroy {
  private animationFrameId: number | null = null;
  private elements: HTMLElement[] = [];
  private positions: { x: number; y: number }[] = [];
  private targetX = -100;
  private targetY = -100;
  private isVisible = false;
  private numParticles = 32;
  private isHoveringClickable = false;

  private onMouseMoveBound = this.onMouseMove.bind(this);
  private onMouseLeaveBound = this.onMouseLeave.bind(this);
  private onMouseEnterBound = this.onMouseEnter.bind(this);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check touch device or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    this.ngZone.runOutsideAngular(() => {
      this.initCursorParticles();
      this.startAnimation();

      window.addEventListener('mousemove', this.onMouseMoveBound, { passive: true });
      document.addEventListener('mouseleave', this.onMouseLeaveBound, { passive: true });
      document.addEventListener('mouseenter', this.onMouseEnterBound, { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('mousemove', this.onMouseMoveBound);
    document.removeEventListener('mouseleave', this.onMouseLeaveBound);
    document.removeEventListener('mouseenter', this.onMouseEnterBound);

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.elements.forEach(el => el.remove());
    this.elements = [];
    this.positions = [];
  }

  private isDarkTheme(): boolean {
    return document.documentElement.classList.contains('dark') || 
           document.documentElement.classList.contains('p-dark') || 
           document.body.classList.contains('dark');
  }

  private initCursorParticles(): void {
    const isDark = this.isDarkTheme();

    for (let i = 0; i < this.numParticles; i++) {
      const el = document.createElement('div');
      el.className = 'custom-cursor-particle';

      const size = Math.max(2.2, 8.1 - i * 0.16);
      const opacityFactor = Math.max(0.035, 0.48 - i * 0.014);

      el.style.position = 'fixed';
      el.style.top = '0';
      el.style.left = '0';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.pointerEvents = 'none';
      el.style.borderRadius = '50%';
      el.style.zIndex = '99999';
      el.style.transform = 'translate(-50%, -50%)';
      el.style.willChange = 'transform, opacity, width, height';
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.25s ease';

      this.applyParticleStyle(el, i, size, opacityFactor, isDark);

      document.body.appendChild(el);
      this.elements.push(el);
      this.positions.push({ x: -100, y: -100 });
    }
  }

  private applyParticleStyle(el: HTMLElement, index: number, size: number, q: number, isDark: boolean): void {
    if (isDark) {
      el.style.mixBlendMode = 'screen';
      el.style.background = `radial-gradient(circle at 30% 30%, rgba(255, 235, 170, ${q * 0.85}), rgba(245, 205, 115, ${q * 0.68}), rgba(195, 145, 60, ${q * 0.4}), rgba(145, 95, 30, ${q * 0.18}), transparent)`;
      el.style.boxShadow = `0 0 ${size * 0.8}px rgba(245, 205, 115, ${q * 0.35}), inset -1px -1px 2px rgba(160, 110, 40, ${q * 0.25}), inset 1px 1px 2px rgba(255, 235, 170, ${q * 0.35})`;
    } else {
      el.style.mixBlendMode = 'normal';
      el.style.background = `radial-gradient(circle at 30% 30%, rgba(205, 160, 45, ${q * 0.9}), rgba(175, 130, 30, ${q * 0.7}), rgba(135, 95, 20, ${q * 0.38}), transparent)`;
      el.style.boxShadow = `0 0 ${size * 0.6}px rgba(180, 135, 30, ${q * 0.3}), inset -1px -1px 2px rgba(130, 90, 18, ${q * 0.2}), inset 1px 1px 2px rgba(240, 205, 110, ${q * 0.3})`;
    }
  }

  private onMouseMove(e: MouseEvent): void {
    this.targetX = e.clientX;
    this.targetY = e.clientY;

    if (!this.isVisible) {
      this.isVisible = true;
      this.elements.forEach(el => el.style.opacity = '1');
      // Snap starting positions on first move
      this.positions.forEach(pos => {
        pos.x = this.targetX;
        pos.y = this.targetY;
      });
    }

    // Check if hovering over clickable elements
    const target = e.target as HTMLElement;
    if (target) {
      this.isHoveringClickable = !!target.closest('a, button, [role="button"], input, textarea, select');
    }
  }

  private onMouseLeave(): void {
    this.isVisible = false;
    this.elements.forEach(el => el.style.opacity = '0');
  }

  private onMouseEnter(): void {
    this.isVisible = true;
    this.elements.forEach(el => el.style.opacity = '1');
  }

  private startAnimation(): void {
    let lastDark = this.isDarkTheme();

    const loop = () => {
      const currentDark = this.isDarkTheme();
      if (currentDark !== lastDark) {
        lastDark = currentDark;
        for (let i = 0; i < this.numParticles; i++) {
          const size = Math.max(2.2, 8.1 - i * 0.16);
          const q = Math.max(0.035, 0.48 - i * 0.014);
          this.applyParticleStyle(this.elements[i], i, size, q, currentDark);
        }
      }

      for (let i = 0; i < this.numParticles; i++) {
        if (i === 0) {
          // Lead particle follows mouse directly with slight softening
          this.positions[i].x = this.targetX;
          this.positions[i].y = this.targetY;

          // Expand lead particle slightly when hovering over links/buttons
          if (this.isHoveringClickable) {
            this.elements[i].style.width = '12px';
            this.elements[i].style.height = '12px';
          } else {
            this.elements[i].style.width = '8px';
            this.elements[i].style.height = '8px';
          }
        } else {
          // Trailing particles follow preceding particle with physics lerp
          const prev = this.positions[i - 1];
          const curr = this.positions[i];
          const easing = 0.42 + i * 0.012; // Physics stiffness factor

          curr.x += (prev.x - curr.x) * easing;
          curr.y += (prev.y - curr.y) * easing;
        }

        this.elements[i].style.transform = `translate3d(${this.positions[i].x}px, ${this.positions[i].y}px, 0) translate(-50%, -50%)`;
      }

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }
}
