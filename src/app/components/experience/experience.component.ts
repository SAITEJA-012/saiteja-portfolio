import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  description: string;
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="mb-10 scroll-reveal">
          <div class="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            02 // CAREER
          </div>
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Work Experience
          </h2>
        </div>

        <!-- Minimalist Timeline List -->
        <div class="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
          <div *ngFor="let exp of experiences; let idx = index" 
               [ngClass]="'stagger-' + (idx + 1)" 
               class="py-6 first:pt-0 last:pb-0 group scroll-reveal">
            
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <div class="flex items-center gap-2">
                <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
                  {{ exp.company }}
                </h3>
                <span class="text-neutral-400">&bull;</span>
                <span class="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  {{ exp.role }}
                </span>
                <span *ngIf="exp.isCurrent" class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#b38e2e]/10 dark:bg-[#dfc378]/15 text-[#b38e2e] dark:text-[#dfc378] font-bold">
                  Current
                </span>
              </div>

              <div class="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {{ exp.period }}
              </div>
            </div>

            <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
              {{ exp.description }}
            </p>

            <div class="flex flex-wrap gap-1.5">
              <span *ngFor="let t of exp.tech" 
                    class="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                {{ t }}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'ShipConsole',
      role: 'Database Developer',
      period: 'Feb 2026 – Present',
      location: 'Hyderabad, India',
      isCurrent: true,
      description: 'Leading enterprise database engineering and zero-downtime migrations to AWS RDS. Writing automated PL/SQL packages, tuning query performance (+35%), and optimizing ERP transactions.',
      tech: ['Oracle PL/SQL', 'AWS RDS', 'Query Optimization', 'ERP Architecture']
    },
    {
      company: 'ShipConsole',
      role: 'Software Engineering Intern',
      period: 'Nov 2025 – Jan 2026',
      location: 'Hyderabad, India',
      isCurrent: false,
      description: 'Built Spring Boot backend services and learned ERP architecture. Converted directly to full-time role based on consistent delivery and technical contribution.',
      tech: ['Java', 'Spring Boot', 'PL/SQL', 'Docker', 'AWS']
    },
    {
      company: 'QSpiders',
      role: 'Java Full Stack Trainee',
      period: 'Feb 2025 – Oct 2025',
      location: 'Training Program',
      isCurrent: false,
      description: 'Intensive corporate curriculum in core & enterprise Java (J2EE), Spring Boot REST APIs, Hibernate ORM, and database optimization.',
      tech: ['Java 17+', 'Spring Boot', 'Hibernate', 'JDBC', 'MySQL']
    },
    {
      company: 'TechOctaNet Services',
      role: 'Web Development Intern',
      period: 'May 2024',
      location: 'Remote',
      isCurrent: false,
      description: 'Developed responsive user interfaces using modern HTML5, CSS3, and JavaScript with cross-browser compatibility.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI']
    }
  ];
}
