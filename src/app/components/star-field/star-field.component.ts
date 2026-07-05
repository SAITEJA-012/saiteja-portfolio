import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
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
  // Increased density to 1500 to match the dense galaxy cloud of tiny specks in the picture
  private numStars = 1500;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
    this.initStars();
    this.animate();
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
    return document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
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
    // In dark theme: crisp white, warm cream, golden oat pinpricks
    const darkColors = ['255, 255, 255', '250, 246, 240', '201, 180, 154', '168, 144, 112'];
    // In light theme: deep olive and golden bark specks
    const lightColors = ['65, 91, 6', '85, 114, 16', '168, 144, 112', '30, 26, 20'];
    const colorPalette = isDark ? darkColors : lightColors;
    const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 5,
      // Ultra-tiny dust specks and pinpricks: sizes between 0.4px and 1.2px
      size: Math.random() * 0.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.1, // Extremely gentle horizontal drift
      vy: -(Math.random() * 0.2 + 0.03), // Very slow upward floating like starry dust
      alpha: Math.random() * 0.7 + 0.2,
      alphaChange: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      color: chosenColor,
      // 50% tiny squares (like pixel dust in picture), 50% tiny dots
      isSquare: Math.random() > 0.5
    };
  }

  private animate = (): void => {
    const canvas = this.canvasRef.nativeElement;
    if (!this.ctx || !canvas) return;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = this.isDarkTheme();
    const darkColors = ['255, 255, 255', '250, 246, 240', '201, 180, 154', '168, 144, 112'];
    const lightColors = ['65, 91, 6', '85, 114, 16', '168, 144, 112', '30, 26, 20'];
    const currentPalette = isDark ? darkColors : lightColors;

    // Immediately update all star colors if theme switched
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

      // Draw ultra-tiny dust speck / star
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
