import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="min-h-[88vh] flex items-center relative py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Copy & Cursive Title -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            <!-- Eyebrow Pill / Status -->
            <div class="inline-flex items-center gap-2.5 text-xs font-bold font-mono tracking-widest uppercase text-[#415b06] dark:text-[#8bab2a] mb-6">
              <span class="online-dot"></span>
              <span>AI ENTHUSIAST</span>
            </div>
            
            <!-- Main Title in One Line with Refined Space Grotesk Weights and Size -->
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight whitespace-nowrap mb-4 font-heading">
              <span class="font-semibold text-[#1e1a14] dark:text-[#f5efe6]">Saiteja</span>
              <span class="font-normal text-[#415b06] dark:text-[#8bab2a] ml-2 sm:ml-3">Athmakuri</span>
            </h1>
            
            <!-- Subtitle / Role (No Hover Background Box) -->
            <div class="text-2xl sm:text-3xl font-bold text-[#1e1a14] dark:text-[#f5efe6] tracking-tight mb-6">
              Database Engineer &amp; Full Stack Developer
            </div>

            <p class="text-base sm:text-lg text-[#4a3e2e] dark:text-[#d6cab8] max-w-2xl font-normal leading-relaxed mb-8">
              Building intelligent enterprise solutions with PL/SQL, Java, Machine Learning, and high-performance Cloud Architecture. 
              Driving seamless SaaS migrations and scalable data products that ship fast.
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4 items-center">
              <a href="#projects" 
                 class="px-7 py-3.5 bg-[#415b06] hover:bg-[#557210] dark:bg-[#6a8c1a] dark:hover:bg-[#8bab2a] text-[#faf6f0] font-bold text-sm rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                <span>View Projects</span>
              </a>
              <a href="assets/Saiteja_Database_Developer.pdf" target="_blank" download="Saiteja_Database_Developer.pdf" 
                 class="px-7 py-3.5 bg-transparent hover:bg-[#415b06]/10 text-[#1e1a14] dark:text-[#f5efe6] border-2 border-[#415b06]/30 dark:border-[#a89070]/30 font-bold rounded-xl transition-all duration-300 text-sm">
                <span>Download Resume</span>
              </a>
              <div class="flex items-center gap-2.5 ml-2">
                <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" title="LinkedIn Profile"
                   class="w-11 h-11 flex items-center justify-center rounded-xl bg-white/60 dark:bg-[#16120e]/60 border border-[#415b06]/20 dark:border-[#a89070]/20 text-[#1e1a14] dark:text-[#f5efe6] hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-all">
                  <i class="pi pi-linkedin text-base"></i>
                </a>
                <a href="https://github.com/SAITEJA-012" target="_blank" title="GitHub Profile"
                   class="w-11 h-11 flex items-center justify-center rounded-xl bg-white/60 dark:bg-[#16120e]/60 border border-[#415b06]/20 dark:border-[#a89070]/20 text-[#1e1a14] dark:text-[#f5efe6] hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-all">
                  <i class="pi pi-github text-base"></i>
                </a>
                <a href="mailto:saitezathmakuri2003@gmail.com" title="Send Email"
                   class="w-11 h-11 flex items-center justify-center rounded-xl bg-white/60 dark:bg-[#16120e]/60 border border-[#415b06]/20 dark:border-[#a89070]/20 text-[#1e1a14] dark:text-[#f5efe6] hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-all">
                  <i class="pi pi-envelope text-base"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Ameya Jarvis Interactive Card Panel -->
          <div class="lg:col-span-5">
            <div class="p-8 rounded-3xl bg-white/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-2xl flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
              <!-- Glow backdrop -->
              <div class="absolute -top-24 -right-24 w-60 h-60 bg-[#6a8c1a]/15 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Profile Avatar Circle -->
              <div class="w-44 h-44 mx-auto rounded-full border-4 border-[#6a8c1a] dark:border-[#8bab2a] shadow-xl overflow-hidden relative group flex items-center justify-center bg-[#415b06]/10 text-[#415b06] dark:text-[#8bab2a] transition-transform duration-300 group-hover:scale-105">
                <!-- We display monogram or photo if available -->
                <div class="text-6xl font-bold font-serif tracking-tighter">SA</div>
              </div>

              <!-- Quick Highlights List -->
              <div class="space-y-2.5 text-left border-t border-[#415b06]/10 dark:border-[#a89070]/10 pt-5">
                <div class="text-[11px] font-mono font-bold text-[#a89070] dark:text-[#b9ab95] uppercase tracking-widest">
                  QUICK HIGHLIGHTS
                </div>
                <div class="space-y-2 text-sm text-[#4a3e2e] dark:text-[#d6cab8] font-medium">
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#415b06] dark:text-[#8bab2a] font-bold">&ndash;</span>
                    <span>PL/SQL &amp; ERP database migration focus</span>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#415b06] dark:text-[#8bab2a] font-bold">&ndash;</span>
                    <span>Java Full Stack &amp; Cloud architecture builds</span>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#415b06] dark:text-[#8bab2a] font-bold">&ndash;</span>
                    <span>Open to full-time engineering &amp; collaborations</span>
                  </div>
                </div>
              </div>

              <!-- 4-Column Stats Row (Exactly as in recording) -->
              <div class="grid grid-cols-4 gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
                <div class="p-2.5 rounded-2xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/70 border border-[#415b06]/15 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover:shadow-md cursor-default hover-flash">
                  <div class="text-lg sm:text-xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] font-mono">4+</div>
                  <div class="text-[9px] font-bold text-[#a89070] dark:text-[#b9ab95] mt-0.5 uppercase tracking-wider leading-tight">Major Projects</div>
                </div>
                <div class="p-2.5 rounded-2xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/70 border border-[#415b06]/15 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover:shadow-md cursor-default hover-flash">
                  <div class="text-lg sm:text-xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] font-mono">5+</div>
                  <div class="text-[9px] font-bold text-[#a89070] dark:text-[#b9ab95] mt-0.5 uppercase tracking-wider leading-tight">Certifications</div>
                </div>
                <div class="p-2.5 rounded-2xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/70 border border-[#415b06]/15 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover:shadow-md cursor-default hover-flash">
                  <div class="text-lg sm:text-xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] font-mono">Team</div>
                  <div class="text-[9px] font-bold text-[#a89070] dark:text-[#b9ab95] mt-0.5 uppercase tracking-wider leading-tight">LEAD &amp; REP</div>
                </div>
                <div class="p-2.5 rounded-2xl bg-[#f8f9fa]/80 dark:bg-[#0e0b09]/70 border border-[#415b06]/15 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover:shadow-md cursor-default hover-flash">
                  <div class="text-lg sm:text-xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] font-mono">DB/FS</div>
                  <div class="text-[9px] font-bold text-[#a89070] dark:text-[#b9ab95] mt-0.5 uppercase tracking-wider leading-tight">SPECIALIZATION</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent { }
