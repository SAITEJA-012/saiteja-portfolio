import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Heading -->
        <div class="text-center sm:text-left mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] relative inline-block">
            About Me
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#415b06] to-[#8bab2a] rounded-full"></span>
          </h2>
        </div>

        <!-- Top Row: Profile Card & Technical Focus Card -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          <!-- Left: Profile Card -->
          <div class="lg:col-span-5 p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div>
              <div class="text-[11px] font-mono font-bold text-[#415b06] dark:text-[#8bab2a] uppercase tracking-widest mb-2">
                PROFILE
              </div>
              <h3 class="text-3xl font-serif italic font-normal text-[#1e1a14] dark:text-[#f5efe6] mb-1">
                Saiteja <span class="font-cursive not-italic font-bold text-[#415b06] dark:text-[#8bab2a]">Athmakuri</span>
              </h3>
              <div class="text-sm font-bold text-[#a89070] dark:text-[#b9ab95] mb-4">
                Database Engineer &amp; Full Stack Developer
              </div>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed">
                Database engineering specialist building PL/SQL transaction pipelines, ERP cloud migrations at Shipconsole, and scalable Java/Spring Boot full-stack applications with high availability.
              </p>
            </div>
            
            <div class="flex flex-wrap gap-2.5 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3.5 py-1.5 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] text-xs font-bold flex items-center gap-1.5">
                <i class="pi pi-map-marker text-[10px]"></i> Hyderabad, India
              </span>
              <span class="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Open to work
              </span>
            </div>
          </div>

          <!-- Right: Technical Focus Card -->
          <div class="lg:col-span-7 p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div>
              <h3 class="text-xl font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-2">
                Technical Focus
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Focused on database engineering, cloud-native ERP migrations, AI/ML analytics, and production-ready full-stack builds with a cloud-first mindset.
              </p>
            </div>
            
            <!-- Skills Pills Grid -->
            <div class="flex flex-wrap gap-2.5">
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-database text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>SQL &amp; PL/SQL Database</span>
              </div>
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-code text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Java &amp; Spring Boot</span>
              </div>
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-cloud text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>AWS &amp; Cloud Migrations</span>
              </div>
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-bolt text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Python &amp; AI/ML Analytics</span>
              </div>
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-globe text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Web Dev (HTML/CSS/JS/Angular)</span>
              </div>
              <div class="px-4 py-2.5 rounded-xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-sm flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
                <i class="pi pi-box text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Docker, Git &amp; ServiceNow</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Row: 3 Columns Grid (Certifications, Interactive Map, Education) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Column 1: Certifications -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div>
              <h4 class="text-base font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-4 flex items-center gap-2">
                <i class="pi pi-verified text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Certifications</span>
              </h4>
              <ul class="space-y-3 text-xs text-[#4a3e2e] dark:text-[#d6cab8]">
                <li class="flex items-start gap-2.5">
                  <span class="text-[#415b06] dark:text-[#8bab2a] font-bold mt-0.5">&bull;</span>
                  <span><strong>AWS Cloud Essentials</strong> &ndash; Amazon Web Services</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#415b06] dark:text-[#8bab2a] font-bold mt-0.5">&bull;</span>
                  <span><strong>IBM SkillsBuild AI</strong> &ndash; IBM</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#415b06] dark:text-[#8bab2a] font-bold mt-0.5">&bull;</span>
                  <span><strong>Java Programming</strong> &ndash; Great Learning</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#415b06] dark:text-[#8bab2a] font-bold mt-0.5">&bull;</span>
                  <span><strong>ServiceNow Micro-Cert</strong> &ndash; Welcome to ServiceNow</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#415b06] dark:text-[#8bab2a] font-bold mt-0.5">&bull;</span>
                  <span><strong>Oracle SQL Fundamentals</strong> &ndash; Cognitive Class</span>
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10 text-[11px] font-mono text-[#a89070] dark:text-[#b9ab95]">
              VERIFIED CREDENTIALS
            </div>
          </div>

          <!-- Column 2: Interactive OpenStreetMap Card (Exactly like Nagpur map at 00:02) -->
          <div class="rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg overflow-hidden relative flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <!-- Map Badge Overlay -->
            <div class="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/95 dark:bg-[#14110d]/95 backdrop-blur-md border border-[#415b06]/20 text-xs font-bold text-[#1e1a14] dark:text-[#f5efe6] shadow-md">
                HYDERABAD
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-[#415b06] text-[#faf6f0] text-[10px] font-mono font-bold w-fit shadow">
                GMT+5:30
              </span>
            </div>
            
            <!-- OpenStreetMap Iframe -->
            <div class="w-full h-full flex-grow relative bg-[#ddd0bf] dark:bg-[#2a241c]">
              <iframe 
                [src]="mapUrl" 
                class="w-full h-full border-0 absolute inset-0 grayscale-[20%] contrast-[105%] opacity-90 hover:opacity-100 transition-opacity" 
                title="Hyderabad Location Map"
                loading="lazy">
              </iframe>
            </div>
            <div class="p-3 bg-[#faf6f0]/90 dark:bg-[#16120e]/90 border-t border-[#415b06]/10 text-center text-[10px] font-mono text-[#a89070] dark:text-[#b9ab95] z-10">
              <i class="pi pi-map-marker text-[#415b06] dark:text-[#8bab2a] mr-1"></i> HYDERABAD, TELANGANA, INDIA
            </div>
          </div>

          <!-- Column 3: Education -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div>
              <h4 class="text-base font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-4 flex items-center gap-2">
                <i class="pi pi-graduation-cap text-[#415b06] dark:text-[#8bab2a]"></i>
                <span>Education</span>
              </h4>
              <ul class="space-y-4 text-xs text-[#4a3e2e] dark:text-[#d6cab8]">
                <li class="space-y-1">
                  <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6] text-sm">B.Tech in CS (AI &amp; ML)</div>
                  <div class="text-[#a89070] dark:text-[#b9ab95]">Siddhartha Institute of Technology &amp; Science</div>
                  <div class="inline-block px-2 py-0.5 rounded bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] text-[10px] font-mono font-bold">
                    Graduated 2025
                  </div>
                </li>
                <li class="space-y-1 pt-3 border-t border-[#415b06]/10">
                  <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6]">Intermediate (MPC)</div>
                  <div class="text-[#a89070] dark:text-[#b9ab95]">Krishnaveni Junior College</div>
                </li>
                <li class="space-y-1 pt-3 border-t border-[#415b06]/10">
                  <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6]">SSC (10th Standard)</div>
                  <div class="text-[#a89070] dark:text-[#b9ab95]">St. Mary's High School</div>
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10 text-[11px] font-mono text-[#a89070] dark:text-[#b9ab95]">
              ACADEMIC FOUNDATION
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // OpenStreetMap embed coordinates for Hyderabad
    const url = 'https://www.openstreetmap.org/export/embed.html?bbox=78.35%2C17.35%2C78.55%2C17.50&layer=mapnik';
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
