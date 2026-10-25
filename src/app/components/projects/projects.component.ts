import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tagline: string;
  category: string;
  metric: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        
        <!-- Section Header -->
        <div class="mb-10 scroll-reveal">
          <div class="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            03 // SELECTED WORK
          </div>
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Featured Projects
          </h2>
        </div>

        <!-- Minimalist Project Cards Stack -->
        <div class="space-y-4">
          <div *ngFor="let p of projects; let idx = index" 
               [ngClass]="'stagger-' + ((idx % 3) + 1)"
               class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800/90 hover:border-[#b38e2e] dark:hover:border-[#dfc378] transition-all duration-200 group shadow-xs scroll-reveal">
            
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <div class="flex items-center gap-2.5">
                <h3 class="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#b38e2e] dark:group-hover:text-[#dfc378] transition-colors">
                  {{ p.title }}
                </h3>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {{ p.category }}
                </span>
              </div>

              <span class="text-xs font-mono font-medium text-[#b38e2e] dark:text-[#dfc378]">
                {{ p.metric }}
              </span>
            </div>

            <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {{ p.description }}
            </p>

            <div class="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/60 text-xs">
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let t of p.tech" 
                      class="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  {{ t }}
                </span>
              </div>

              <a [href]="p.githubUrl" target="_blank" 
                 class="font-mono text-xs text-neutral-700 dark:text-neutral-300 hover:text-[#b38e2e] dark:hover:text-[#dfc378] flex items-center gap-1 transition-colors">
                <span>Code</span>
                <i class="pi pi-arrow-up-right text-[10px]"></i>
              </a>
            </div>

          </div>
        </div>

        <!-- Minimal GitHub Link Bar -->
        <div class="mt-8 text-center sm:text-left">
          <a href="https://github.com/SAITEJA-012" target="_blank" 
             class="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <i class="pi pi-github"></i>
            <span>Explore all repositories on GitHub &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Enterprise PL/SQL Migration Toolkit',
      tagline: 'Zero-Downtime Data Architecture',
      category: 'Database',
      metric: 'Production Ready',
      description: 'Automated suite of PL/SQL packages, cursors, and schema transformation procedures built for zero-downtime ERP migrations to AWS RDS with high transactional integrity.',
      tech: ['Oracle PL/SQL', 'AWS RDS', 'Stored Procedures', 'ETL'],
      githubUrl: 'https://github.com/SAITEJA-012'
    },
    {
      title: 'Food AI & Calorie Estimation',
      tagline: 'Deep Learning Computer Vision',
      category: 'AI / Research',
      metric: 'ICMDRI Published',
      description: 'Published research at ICMDRI (Top 15% innovation). Built a deep CNN computer vision model with MobileNetV2 achieving 92% accuracy for real-time nutritional estimation.',
      tech: ['Python', 'TensorFlow', 'MobileNetV2', 'OpenCV'],
      githubUrl: 'https://github.com/SAITEJA-012'
    },
    {
      title: 'Real-Time Traffic Surveillance',
      tagline: 'Intelligent CCTV Analytics',
      category: 'Computer Vision',
      metric: '96% Detection mAP',
      description: 'Traffic monitoring and vehicle density tracking pipeline leveraging YOLOv7 with multithreading, providing 30% execution speed enhancement across streaming video.',
      tech: ['YOLOv7', 'OpenCV', 'Python', 'Multithreading'],
      githubUrl: 'https://github.com/SAITEJA-012'
    },
    {
      title: 'Library Automation & Management System',
      tagline: 'Enterprise Java Automation',
      category: 'Enterprise Java',
      metric: '+35% Efficiency',
      description: 'Institutional automation system integrating automated book issue/return tracking, algorithmic fine calculation, and notification dispatch using Java and MySQL.',
      tech: ['Java', 'MySQL', 'JDBC', 'SQL Optimization'],
      githubUrl: 'https://github.com/SAITEJA-012'
    },
    {
      title: 'Cloud-Native Task Management API',
      tagline: 'RESTful Microservices',
      category: 'Microservices',
      metric: 'AWS Deployed',
      description: 'Full-stack RESTful microservices architecture built with Java Spring Boot and Angular, containerized with Docker and orchestrated on AWS EC2.',
      tech: ['Java Spring Boot', 'Angular', 'Docker', 'AWS EC2'],
      githubUrl: 'https://github.com/SAITEJA-012'
    },
    {
      title: 'Intelligent Spam Classifier',
      tagline: 'Natural Language Processing',
      category: 'Machine Learning',
      metric: '98.4% Precision',
      description: 'NLP classification engine using TF-IDF term vectorization and ensemble algorithms to filter spam with high precision and minimal false positives.',
      tech: ['Python', 'Scikit-Learn', 'TF-IDF', 'NLP'],
      githubUrl: 'https://github.com/SAITEJA-012'
    }
  ];
}
