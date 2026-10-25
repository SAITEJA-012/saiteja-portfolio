import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  category: 'database' | 'backend' | 'cloud' | 'ai' | 'frontend';
  level: string;
  logo: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="mb-10 scroll-reveal">
          <div class="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            01 // CAPABILITIES
          </div>
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Tech Stack &amp; Foundations
          </h2>
          <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Hover over any logo to reveal its name and proficiency level.
          </p>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 mb-8 text-xs font-mono scroll-reveal stagger-1">
          <button *ngFor="let cat of categories" 
                  (click)="selectedCategory = cat.id"
                  [ngClass]="selectedCategory === cat.id ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold shadow-xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'"
                  class="px-3 py-1.5 rounded-md transition-colors">
            {{ cat.label }}
          </button>
        </div>

        <!-- Minimalist Logo Grid with Hover Tooltip -->
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4 mb-14 scroll-reveal stagger-2">
          <div *ngFor="let item of filteredSkills()" 
               class="relative group aspect-square flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800/90 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-all duration-200 cursor-pointer shadow-xs">
            
            <!-- Logo Image -->
            <img [src]="item.logo" [alt]="item.name" 
                 class="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-110">

            <!-- Hover Tooltip -->
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[11px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg flex items-center gap-1.5 border border-white/10 dark:border-black/10">
              <span class="font-medium">{{ item.name }}</span>
              <span class="text-[9px] px-1 py-0.2 rounded bg-[#b38e2e] dark:bg-[#dfc378] text-white dark:text-neutral-900 font-bold">
                {{ item.level }}
              </span>
            </div>

          </div>
        </div>

        <!-- Academic & Background Minimalist Split -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 text-xs scroll-reveal stagger-1">
          
          <!-- Education -->
          <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/40 dark:bg-neutral-900/30">
            <div class="flex items-center justify-between text-neutral-500 font-mono text-[10px] uppercase mb-1">
              <span>B.Tech Degree</span>
              <span class="text-[#b38e2e] dark:text-[#dfc378] font-bold">7.39 CGPA</span>
            </div>
            <div class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
              Siddhartha Institute of Engineering &amp; Technology
            </div>
            <div class="text-neutral-500 mt-1">Computer Science (AI &amp; ML) &bull; 2021 &ndash; 2025</div>
          </div>

          <!-- Research Publication -->
          <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white/40 dark:bg-neutral-900/30">
            <div class="flex items-center justify-between text-neutral-500 font-mono text-[10px] uppercase mb-1">
              <span>Research Paper</span>
              <span class="text-[#b38e2e] dark:text-[#dfc378] font-bold">Top 15%</span>
            </div>
            <div class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
              Food AI &amp; Calorie Estimation (ICMDRI)
            </div>
            <div class="text-neutral-500 mt-1">Published research using MobileNetV2 CNN (92% Accuracy)</div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  selectedCategory = 'all';

  categories = [
    { id: 'all', label: 'All' },
    { id: 'database', label: 'Database' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'frontend', label: 'Web' }
  ];

  skills: TechItem[] = [
    { name: 'Oracle PL/SQL', category: 'database', level: 'Expert', logo: 'assets/icons/oracle.svg' },
    { name: 'MySQL & JDBC', category: 'database', level: 'Advanced', logo: 'assets/icons/mysql.svg' },
    { name: 'Java (17+ & OOP)', category: 'backend', level: 'Expert', logo: 'assets/icons/java.svg' },
    { name: 'Spring Boot REST', category: 'backend', level: 'Advanced', logo: 'assets/icons/spring.svg' },
    { name: 'Hibernate JPA', category: 'backend', level: 'Proficient', logo: 'assets/icons/hibernate.svg' },
    { name: 'AWS RDS & EC2', category: 'cloud', level: 'Advanced', logo: 'assets/icons/aws.svg' },
    { name: 'Docker', category: 'cloud', level: 'Proficient', logo: 'assets/icons/docker.svg' },
    { name: 'Git & GitHub', category: 'cloud', level: 'Advanced', logo: 'assets/icons/git.svg' },
    { name: 'Python', category: 'ai', level: 'Advanced', logo: 'assets/icons/python.svg' },
    { name: 'TensorFlow', category: 'ai', level: 'Advanced', logo: 'assets/icons/tensorflow.svg' },
    { name: 'OpenCV', category: 'ai', level: 'Advanced', logo: 'assets/icons/opencv.svg' },
    { name: 'Angular', category: 'frontend', level: 'Advanced', logo: 'assets/icons/angular.svg' },
    { name: 'HTML5', category: 'frontend', level: 'Expert', logo: 'assets/icons/html5.svg' },
    { name: 'CSS3', category: 'frontend', level: 'Expert', logo: 'assets/icons/css3.svg' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Advanced', logo: 'assets/icons/tailwindcss.svg' },
    { name: 'ServiceNow', category: 'backend', level: 'Proficient', logo: 'assets/icons/servicenow.svg' }
  ];

  filteredSkills(): TechItem[] {
    if (this.selectedCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.selectedCategory);
  }
}
