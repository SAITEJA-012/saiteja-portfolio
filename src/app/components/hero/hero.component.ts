import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        
        <!-- Top Status Pill -->
        <div class="flex items-center gap-2 mb-6">
          <span class="gold-pulse-dot"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            ShipConsole &bull; Database Developer
          </span>
        </div>

        <!-- Main Hero Headline -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight mb-6">
          Saiteja Athmakuri
        </h1>

        <!-- Subtitle & Bio -->
        <div class="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium mb-4">
          Software &amp; Database Engineer based in Hyderabad, India.
        </div>

        <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl font-normal">
          Building and migrating mission-critical data systems. Currently engineering automated 
          <span class="text-[#b38e2e] dark:text-[#dfc378] font-medium">Oracle PL/SQL</span> pipelines and 
          <span class="text-[#b38e2e] dark:text-[#dfc378] font-medium">AWS RDS</span> architectures at ShipConsole. 
          Author of peer-reviewed AI computer vision research (<span class="italic">ICMDRI Published</span>).
        </p>

        <!-- Minimalist Action Links Row -->
        <div class="flex flex-wrap items-center gap-4 text-xs">
          <a href="mailto:saitejaa.connect@gmail.com" 
             class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-[#b38e2e] dark:hover:bg-[#dfc378] transition-colors font-medium">
            <i class="pi pi-envelope text-[11px]"></i>
            <span>saitejaa.connect&#64;gmail.com</span>
          </a>

          <a href="assets/Saiteja_Database_Developer.pdf" target="_blank" download="Saiteja_Database_Developer.pdf"
             class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-[#b38e2e] dark:hover:border-[#dfc378] text-neutral-800 dark:text-neutral-200 transition-colors font-medium">
            <i class="pi pi-download text-[11px] text-[#b38e2e] dark:text-[#dfc378]"></i>
            <span>Resume</span>
          </a>

          <div class="flex items-center gap-1 text-neutral-500">
            <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" title="LinkedIn"
               class="p-2 rounded-lg hover:text-[#b38e2e] dark:hover:text-[#dfc378] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              <i class="pi pi-linkedin text-sm"></i>
            </a>
            <a href="https://github.com/SAITEJA-012" target="_blank" title="GitHub"
               class="p-2 rounded-lg hover:text-[#b38e2e] dark:hover:text-[#dfc378] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              <i class="pi pi-github text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Minimalist Impact Strip -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-neutral-200/80 dark:border-neutral-800/80 scroll-reveal">
          <div>
            <div class="text-xl font-mono font-semibold text-neutral-900 dark:text-neutral-100">1+ Yrs</div>
            <div class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Enterprise Software</div>
          </div>
          <div>
            <div class="text-xl font-mono font-semibold text-[#b38e2e] dark:text-[#dfc378]">+35%</div>
            <div class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">DB Performance</div>
          </div>
          <div>
            <div class="text-xl font-mono font-semibold text-neutral-900 dark:text-neutral-100">92%+</div>
            <div class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">AI Precision</div>
          </div>
          <div>
            <div class="text-xl font-mono font-semibold text-[#b38e2e] dark:text-[#dfc378]">Top 15%</div>
            <div class="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">ICMDRI Research</div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {}
