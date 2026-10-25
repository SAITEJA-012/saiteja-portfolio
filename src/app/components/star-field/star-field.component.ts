import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaChange: number;
  color: string;
  isSquare: boolean;
}

@Component({
  selector: 'app-star-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #starCanvas class="fixed inset-0 pointer-events-none z-0 w-full h-full transition-opacity duration-1000"></canvas>
  `
})
export class StarFieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId!: number;
  private stars: Star[] = [];
  // Restored full density to match previous cosmic particle experience
  private numStars = 1200;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
    this.initStars();
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
    this.initStars();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private isDarkTheme(): boolean {
    return document.documentElement.classList.contains('dark') || document.body.classList.contains('dark') || document.documentElement.classList.contains('p-dark');
  }

  private initStars(): void {
    const canvas = this.canvasRef.nativeElement;
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push(this.createStar(canvas.width, canvas.height, true));
    }
  }

  private lastIsDark: boolean | null = null;

  private createStar(width: number, height: number, randomY: boolean = false): Star {
    const isDark = this.isDarkTheme();
    // In dark theme: crisp white, celestial warm gold, champagne, and starry silver
    const darkColors = ['255, 255, 255', '223, 195, 120', '245, 224, 160', '200, 200, 200', '180, 150, 80'];
    // In light theme: warm gold, rich bronze, charcoal slate, and subtle amber
    const lightColors = ['179, 142, 46', '140, 110, 30', '80, 80, 75', '30, 30, 30'];
    const colorPalette = isDark ? darkColors : lightColors;
    const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 5,
      // Sizes between 0.4px and 1.3px for fine cosmic dust look
      size: Math.random() * 0.9 + 0.4,
      vx: (Math.random() - 0.5) * 0.12, // Gentle horizontal drift
      vy: -(Math.random() * 0.22 + 0.04), // Steady upward floating motion
      alpha: Math.random() * 0.7 + 0.25,
      alphaChange: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      color: chosenColor,
      isSquare: Math.random() > 0.55
    };
  }

  private animate = (): void => {
    const canvas = this.canvasRef.nativeElement;
    if (!this.ctx || !canvas) return;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = this.isDarkTheme();
    const darkColors = ['255, 255, 255', '223, 195, 120', '245, 224, 160', '200, 200, 200', '180, 150, 80'];
    const lightColors = ['179, 142, 46', '140, 110, 30', '80, 80, 75', '30, 30, 30'];
    const currentPalette = isDark ? darkColors : lightColors;

    // Immediately update star colors if theme switched
    if (this.lastIsDark !== null && this.lastIsDark !== isDark) {
      for (let i = 0; i < this.stars.length; i++) {
        this.stars[i].color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
      }
    }
    this.lastIsDark = isDark;

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      // Update position
      star.x += star.vx;
      star.y += star.vy;

      // Update twinkling alpha
      star.alpha += star.alphaChange;
      if (star.alpha <= 0.15) {
        star.alpha = 0.15;
        star.alphaChange = -star.alphaChange;
      } else if (star.alpha >= 0.85) {
        star.alpha = 0.85;
        star.alphaChange = -star.alphaChange;
      }

      // Wrap around screen boundaries
      if (star.y < -5) {
        this.stars[i] = this.createStar(canvas.width, canvas.height, false);
      }
      if (star.x < -5) {
        star.x = canvas.width + 5;
      } else if (star.x > canvas.width + 5) {
        star.x = -5;
      }

      // Draw floating cosmic star / dot
      this.ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`;
      if (star.isSquare) {
        this.ctx.fillRect(star.x, star.y, star.size, star.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
