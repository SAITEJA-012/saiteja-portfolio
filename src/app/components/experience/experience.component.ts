import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 border-y border-[#415b06]/10 dark:border-[#a89070]/10 bg-[#faf6f0]/40 dark:bg-[#14110d]/40 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="text-center mb-14">
          <div class="text-xs font-mono font-bold text-[#415b06] dark:text-[#8bab2a] uppercase tracking-widest mb-2">
            CAREER PATH
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] mb-3">
            Experience &amp; Background
          </h2>
          <p class="text-sm sm:text-base text-[#4a3e2e] dark:text-[#d6cab8] max-w-2xl mx-auto leading-relaxed">
            A track record of delivering enterprise database solutions, cloud migrations, and full-stack software.
          </p>
        </div>
        
        <div class="max-w-[820px] mx-auto space-y-6">
          <!-- Experience 1 -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-[#1e1a14] dark:text-[#f5efe6] flex items-center gap-2">
                <span>Shipconsole</span>
                <span class="text-xs font-normal text-[#a89070] dark:text-[#b9ab95]">&bull; Hyderabad / Remote</span>
              </h3>
              <span class="text-xs font-mono px-3.5 py-1.5 bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] font-bold rounded-full w-fit mt-2 md:mt-0">Feb 2026 &ndash; Present</span>
            </div>
            <div class="text-sm font-bold text-[#415b06] dark:text-[#8bab2a] mb-3">Database Developer &amp; ERP Expert</div>
            <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed">
              Driving enterprise client migrations from on-premise infrastructure to high-availability Cloud/SaaS environments. 
              Architecting and developing robust PL/SQL packages, procedures, and data transformation scripts while optimizing database performance for complex ERP integrations.
            </p>
          </div>

          <!-- Experience 2 -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-[#1e1a14] dark:text-[#f5efe6] flex items-center gap-2">
                <span>Shipconsole</span>
                <span class="text-xs font-normal text-[#a89070] dark:text-[#b9ab95]">&bull; Hyderabad, India</span>
              </h3>
              <span class="text-xs font-mono px-3.5 py-1.5 bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[#1e1a14] dark:text-[#f5efe6] font-bold rounded-full w-fit mt-2 md:mt-0">Nov 2025 &ndash; Jan 2026</span>
            </div>
            <div class="text-sm font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-3">Software Engineering Intern</div>
            <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed">
              Gained deep hands-on expertise in PL/SQL, Spring, SpringBoot, AWS cloud architecture, Docker, Git, and enterprise ERP workflows. 
              Successfully earned a full-time conversion offer through exceptional technical problem-solving and rapid delivery of production-ready code.
            </p>
          </div>

          <!-- Experience 3 -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-[#1e1a14] dark:text-[#f5efe6] flex items-center gap-2">
                <span>QSpiders / JSpiders</span>
                <span class="text-xs font-normal text-[#a89070] dark:text-[#b9ab95]">&bull; Training Program</span>
              </h3>
              <span class="text-xs font-mono px-3.5 py-1.5 bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[#1e1a14] dark:text-[#f5efe6] font-bold rounded-full w-fit mt-2 md:mt-0">Feb 2025 &ndash; Ongoing</span>
            </div>
            <div class="text-sm font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-3">Java Full Stack Development Trainee</div>
            <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed">
              Specialized training in Java Object-Oriented Programming, Spring Boot backend development, JDBC, SQL database optimization, and responsive frontend frameworks.
            </p>
          </div>

          <!-- Experience 4 -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#415b06] dark:hover:border-[#8bab2a] hover-flash">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-[#1e1a14] dark:text-[#f5efe6] flex items-center gap-2">
                <span>TechOctaNet Services Pvt Ltd</span>
                <span class="text-xs font-normal text-[#a89070] dark:text-[#b9ab95]">&bull; Remote</span>
              </h3>
              <span class="text-xs font-mono px-3.5 py-1.5 bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[#1e1a14] dark:text-[#f5efe6] font-bold rounded-full w-fit mt-2 md:mt-0">May 2024</span>
            </div>
            <div class="text-sm font-bold text-[#1e1a14] dark:text-[#f5efe6] mb-3">Web Development Intern</div>
            <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed">
              Developed and deployed responsive web interfaces using HTML5, CSS3, and JavaScript. Collaborated on frontend components and improved cross-browser compatibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {}
