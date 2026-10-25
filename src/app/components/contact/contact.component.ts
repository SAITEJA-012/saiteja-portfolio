import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="mb-8 scroll-reveal">
          <div class="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            04 // CONNECT
          </div>
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Get In Touch
          </h2>
          <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
            I am always open to discussing enterprise database engineering, cloud migrations, or full-stack software development.
          </p>
        </div>

        <!-- Contact Links Stack -->
        <div class="space-y-3 font-mono text-xs">
          
          <!-- Email with Copy Button -->
          <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex items-center justify-between scroll-reveal stagger-1">
            <div>
              <div class="text-[10px] text-neutral-400 uppercase tracking-wider">Email</div>
              <a href="mailto:saitejaa.connect@gmail.com" class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-[#b38e2e] dark:hover:text-[#dfc378] transition-colors">
                saitejaa.connect&#64;gmail.com
              </a>
            </div>
            <button (click)="copyEmail()" 
                    class="px-2.5 py-1 rounded-md text-[11px] border border-neutral-300 dark:border-neutral-700 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-colors flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
              <i class="pi" [ngClass]="copied ? 'pi-check text-emerald-500' : 'pi-copy text-[10px]'"></i>
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>

          <!-- Phone & Location Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 scroll-reveal stagger-2">
            <a href="tel:+918309229402" class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-colors block group">
              <div class="text-[10px] text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                <span>Phone / WhatsApp</span>
                <i class="pi pi-arrow-up-right text-[10px] text-neutral-400 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378]"></i>
              </div>
              <div class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378] transition-colors mt-0.5">
                +91 8309229402
              </div>
            </a>

            <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60">
              <div class="text-[10px] text-neutral-400 uppercase tracking-wider">Location</div>
              <div class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
                Hyderabad, India &bull; IST
              </div>
            </div>
          </div>

          <!-- Social Links Row -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 scroll-reveal stagger-3">
            <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" 
               class="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-colors flex items-center justify-between text-neutral-800 dark:text-neutral-200 group">
              <span class="flex items-center gap-2">
                <i class="pi pi-linkedin"></i>
                <span class="text-xs font-medium">LinkedIn</span>
              </span>
              <i class="pi pi-arrow-up-right text-[10px] text-neutral-400 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378]"></i>
            </a>

            <a href="https://github.com/SAITEJA-012" target="_blank" 
               class="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-colors flex items-center justify-between text-neutral-800 dark:text-neutral-200 group">
              <span class="flex items-center gap-2">
                <i class="pi pi-github"></i>
                <span class="text-xs font-medium">GitHub</span>
              </span>
              <i class="pi pi-arrow-up-right text-[10px] text-neutral-400 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378]"></i>
            </a>

            <a href="assets/Saiteja_Database_Developer.pdf" target="_blank" rel="noopener noreferrer"
               class="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-colors flex items-center justify-between text-neutral-800 dark:text-neutral-200 group col-span-2 sm:col-span-1">
              <span class="flex items-center gap-2">
                <i class="pi pi-file-pdf text-[#b38e2e] dark:text-[#dfc378]"></i>
                <span class="text-xs font-medium">Resume</span>
              </span>
              <i class="pi pi-arrow-up-right text-[10px] text-neutral-400 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378]"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  copied = false;

  copyEmail(): void {
    navigator.clipboard.writeText('saitejaa.connect@gmail.com');
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
