import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 relative">
    <section id="projects" class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- Ameya Jarvis Section Header -->
        <div class="text-center mb-14">
          <div class="text-xs font-mono font-bold text-[#415b06] dark:text-[#8bab2a] uppercase tracking-widest mb-2">
            SELECTED WORK
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1e1a14] dark:text-[#f5efe6] mb-3">
            Featured Projects
          </h2>
          <p class="text-sm sm:text-base text-[#4a3e2e] dark:text-[#d6cab8] max-w-2xl mx-auto leading-relaxed">
            A curated selection of database engineering, AI/ML research, and full-stack enterprise builds with real-world impact.
          </p>
        </div>

        <!-- 3-Column Grid (Matches video 00:06) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <!-- Project 1: Library Management System -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-database"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                Library Management System
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Enterprise-grade library automation system. Increased overall operational efficiency by 35% by integrating automated book issue/return tracking, algorithmic fine calculation, and automated email notification modules.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Java</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">MySQL</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">JDBC</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">SQL</span>
            </div>
          </div>

          <!-- Project 2: Food AI & Calorie Estimation -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-camera"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                Food AI &amp; Calorie Estimation
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Published AI research at ICMDRI (Top 15%). Engineered a CNN computer vision model achieving 92% classification accuracy for multi-class food recognition and real-time nutritional calorie estimation using MobileNetV2.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Python</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">TensorFlow</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">MobileNetV2</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">OpenCV</span>
            </div>
          </div>

          <!-- Project 3: Traffic Surveillance -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-car"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                Real-Time Traffic Surveillance
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Built a high-accuracy traffic monitoring and vehicle tracking pipeline using Convolutional Neural Networks and YOLOv7, achieving 96% detection accuracy. Engineered multithreading for a 30% speed boost.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">YOLOv7</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">OpenCV</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Computer Vision</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Multithreading</span>
            </div>
          </div>

          <!-- Project 4: Spam Classifier -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-shield"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                Spam Classifier &amp; Text NLP
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Engineered an intelligent text classification engine utilizing TF-IDF vectorization and Naive Bayes / Random Forest algorithms to filter spam with 98.4% precision and minimal false positives.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Python</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Scikit-Learn</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">TF-IDF</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">NLP</span>
            </div>
          </div>

          <!-- Project 5: Enterprise PL/SQL Migration Toolkit -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-server"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                PL/SQL &amp; Cloud Migration Toolkit
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Custom suite of PL/SQL packages, cursors, and validation scripts developed to automate data cleansing, schema mapping, and zero-downtime migration to AWS RDS for Shipconsole enterprise clients.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">PL/SQL</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Oracle</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">AWS RDS</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">ETL</span>
            </div>
          </div>

          <!-- Project 6: Cloud Native Task Tracker -->
          <div class="p-7 rounded-3xl bg-[#faf6f0]/80 dark:bg-[#16120e]/80 border border-[#415b06]/20 dark:border-[#a89070]/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:border-[#415b06] dark:hover:border-[#8bab2a] flex flex-col justify-between group hover-flash">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] flex items-center justify-center font-bold text-lg">
                  <i class="pi pi-check-square"></i>
                </div>
                <a href="https://github.com/SAITEJA-012" target="_blank" class="w-9 h-9 rounded-xl border border-[#415b06]/20 flex items-center justify-center text-[#4a3e2e] dark:text-[#d6cab8] hover:text-[#415b06] dark:hover:text-[#8bab2a] hover:bg-[#415b06]/10 transition-all">
                  <i class="pi pi-external-link text-xs"></i>
                </a>
              </div>
              <h3 class="text-lg font-bold text-[#1e1a14] dark:text-[#f5efe6] group-hover:text-[#415b06] dark:group-hover:text-[#8bab2a] transition-colors mb-2">
                Cloud-Native Task Management API
              </h3>
              <p class="text-xs sm:text-sm text-[#4a3e2e] dark:text-[#d6cab8] leading-relaxed mb-6">
                Full-stack RESTful microservices built with Java Spring Boot, Hibernate JPA, and Angular. Containerized with Docker and deployed on AWS EC2 with CI/CD pipeline automation.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[#415b06]/10 dark:border-[#a89070]/10">
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Java Spring</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Angular</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">Docker</span>
              <span class="px-3 py-1 rounded-full bg-[#faf6f0]/80 dark:bg-[#0e0b09]/80 border border-[#415b06]/15 text-[11px] font-bold text-[#1e1a14] dark:text-[#f5efe6]">AWS</span>
            </div>
          </div>

        </div>

        <!-- Center GitHub Button (Matches video 00:08) -->
        <div class="text-center">
          <a href="https://github.com/SAITEJA-012" target="_blank" 
             class="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#faf6f0] dark:bg-[#16120e] border border-[#415b06]/30 dark:border-[#a89070]/30 hover:bg-[#415b06]/10 text-[#1e1a14] dark:text-[#f5efe6] font-bold text-xs uppercase tracking-widest transition-all shadow-md transform hover:-translate-y-1 hover-flash">
            <span>SEE ALL PROJECTS ON GITHUB</span>
            <i class="pi pi-arrow-right text-[10px]"></i>
          </a>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {}
