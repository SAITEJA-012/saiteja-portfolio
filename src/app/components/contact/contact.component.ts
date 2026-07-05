import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Ameya Jarvis Section Header -->
        <div class="text-center mb-14">
          <div class="text-xs font-mono font-bold text-[#415b06] dark:text-[#8bab2a] uppercase tracking-widest mb-2">
            LET'S CONNECT
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] mb-3">
            Get In Touch
          </h2>
          <p class="text-sm sm:text-base text-[#4a3e2e] dark:text-[#d6cab8] max-w-2xl mx-auto leading-relaxed">
            Have a database migration project in mind, looking for a full-stack engineer, or want to connect? Send a message below.
          </p>
        </div>
        
        <!-- Ameya Jarvis Style Contact Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <!-- Card 1: LinkedIn -->
          <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" class="p-6 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 hover:border-[#415b06] dark:hover:border-[#8bab2a] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover-flash">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                <i class="pi pi-linkedin"></i>
              </div>
              <i class="pi pi-arrow-up-right text-xs text-[#a89070] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors"></i>
            </div>
            <div>
              <div class="text-[11px] font-mono font-bold text-[#a89070] dark:text-[#b9ab95] uppercase tracking-wider">LinkedIn</div>
              <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors text-sm mt-1">saitejaathmakuri</div>
            </div>
          </a>

          <!-- Card 2: Email -->
          <a href="mailto:saitezathmakuri2003@gmail.com" class="p-6 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 hover:border-[#415b06] dark:hover:border-[#8bab2a] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover-flash">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                <i class="pi pi-envelope"></i>
              </div>
              <i class="pi pi-arrow-up-right text-xs text-[#a89070] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors"></i>
            </div>
            <div>
              <div class="text-[11px] font-mono font-bold text-[#a89070] dark:text-[#b9ab95] uppercase tracking-wider">Email Me</div>
              <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors text-xs mt-1 truncate" title="saitezathmakuri2003@gmail.com">saitezathmakuri2003&#64;gmail.com</div>
            </div>
          </a>

          <!-- Card 3: Phone -->
          <a href="tel:+918309229402" class="p-6 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 hover:border-[#415b06] dark:hover:border-[#8bab2a] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover-flash">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                <i class="pi pi-phone"></i>
              </div>
              <i class="pi pi-arrow-up-right text-xs text-[#a89070] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors"></i>
            </div>
            <div>
              <div class="text-[11px] font-mono font-bold text-[#a89070] dark:text-[#b9ab95] uppercase tracking-wider">Call Me</div>
              <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors text-sm mt-1">+91 8309229402</div>
            </div>
          </a>

          <!-- Card 4: Location -->
          <div class="p-6 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 hover:border-[#415b06] dark:hover:border-[#8bab2a] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between shadow-lg hover:shadow-2xl hover-flash">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                <i class="pi pi-map-marker"></i>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-bold">Available</span>
            </div>
            <div>
              <div class="text-[11px] font-mono font-bold text-[#a89070] dark:text-[#b9ab95] uppercase tracking-wider">Location</div>
              <div class="font-bold text-[#1e1a14] dark:text-[#f5efe6] text-sm mt-1">Hyderabad, India</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {}
