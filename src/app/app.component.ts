import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { StarFieldComponent } from './components/star-field/star-field.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';

interface SearchItem {
  title: string;
  category: string;
  description: string;
  link: string;
  keywords: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, StarFieldComponent, AiAssistantComponent],
  template: `
    <!-- Moving & Twinkling Star Field Background (Light & Dark Mode) -->
    <app-star-field></app-star-field>

    <div class="min-h-screen bg-transparent bg-grid-pattern font-sans flex flex-col relative pb-16 z-10">
      <!-- Top Navigation Header -->
      <header class="fixed top-0 left-0 right-0 z-[100] py-4 transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <!-- Left Logo / Brand (Replaced JARVIS [SAITEJA] with clean cursive name) -->
          <a href="#home" class="font-serif italic text-xl font-bold tracking-tight text-[#1e1a14] dark:text-[#f5efe6] hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-colors">
            Saiteja
          </a>

          <!-- Center Pill Nav (Desktop) with Dynamic Active Section Highlighting -->
          <nav class="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#faf6f0]/80 dark:bg-[#14110d]/80 backdrop-blur-md border border-[#415b06]/20 dark:border-[#a89070]/20 shadow-sm">
            <a href="#home" (click)="setActive('home')" [ngClass]="activeSection === 'home' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] border border-[#415b06]/30 dark:border-[#8bab2a]/40 shadow-sm font-bold' : 'text-[#a89070] hover:text-[#1e1a14] dark:hover:text-[#f5efe6] border border-transparent'" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all">Home</a>
            <a href="#about" (click)="setActive('about')" [ngClass]="activeSection === 'about' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] border border-[#415b06]/30 dark:border-[#8bab2a]/40 shadow-sm font-bold' : 'text-[#a89070] hover:text-[#1e1a14] dark:hover:text-[#f5efe6] border border-transparent'" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all">About</a>
            <a href="#experience" (click)="setActive('experience')" [ngClass]="activeSection === 'experience' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] border border-[#415b06]/30 dark:border-[#8bab2a]/40 shadow-sm font-bold' : 'text-[#a89070] hover:text-[#1e1a14] dark:hover:text-[#f5efe6] border border-transparent'" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all">Experience</a>
            <a href="#projects" (click)="setActive('projects')" [ngClass]="activeSection === 'projects' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] border border-[#415b06]/30 dark:border-[#8bab2a]/40 shadow-sm font-bold' : 'text-[#a89070] hover:text-[#1e1a14] dark:hover:text-[#f5efe6] border border-transparent'" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all">Projects</a>
            <a href="#contact" (click)="setActive('contact')" [ngClass]="activeSection === 'contact' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] border border-[#415b06]/30 dark:border-[#8bab2a]/40 shadow-sm font-bold' : 'text-[#a89070] hover:text-[#1e1a14] dark:hover:text-[#f5efe6] border border-transparent'" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all">Contact</a>
            <a href="assets/Saiteja_Developer.pdf" target="_blank" class="px-5 py-2 rounded-full text-xs font-bold tracking-widest text-[#a89070] hover:text-[#415b06] dark:hover:text-[#8bab2a] uppercase transition-all flex items-center gap-1 border border-transparent"><i class="pi pi-arrow-up-right text-[10px]"></i>Resume</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-3">
            <!-- Search / Ask AI button -->
            <button (click)="openSearch()" title="Ask AI" class="w-10 h-10 rounded-xl border border-[#415b06]/20 dark:border-[#a89070]/20 flex items-center justify-center text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10 transition-all">
              <i class="pi pi-search text-sm text-[#415b06] dark:text-[#8bab2a]"></i>
            </button>

            <!-- Theme Toggle -->
            <button (click)="toggleTheme()" title="Toggle Light/Dark Mode" class="w-10 h-10 rounded-xl border border-[#415b06]/20 dark:border-[#a89070]/20 flex items-center justify-center text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10 transition-all">
              <i class="pi text-sm" [ngClass]="isDarkMode ? 'pi-moon' : 'pi-sun'"></i>
            </button>

            <!-- Mobile Hamburger Button -->
            <button (click)="toggleMenu($event)" title="Navigation Menu" class="md:hidden w-10 h-10 rounded-xl border border-[#415b06]/20 dark:border-[#a89070]/20 flex items-center justify-center text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10 transition-all">
              <i class="pi text-sm" [ngClass]="isMenuOpen ? 'pi-times' : 'pi-bars'"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow pt-24">
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-experience id="experience"></app-experience>
        <app-projects id="projects"></app-projects>
        <app-contact id="contact"></app-contact>
      </main>

      <!-- Footer -->
      <footer class="border-t border-[#415b06]/15 dark:border-[#a89070]/15 py-10 bg-[#faf6f0]/60 dark:bg-[#14110d]/60 backdrop-blur-md relative z-10 text-xs text-[#a89070]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="font-serif italic font-bold text-[#1e1a14] dark:text-[#f5efe6]">Saiteja Athmakuri</div>
          <div class="text-center sm:text-right">
            <div>&copy; 2026 Saiteja Athmakuri. Crafted with Angular &amp; Ameya Jarvis Warm Dark Oat Theme.</div>
            <div class="mt-1 flex justify-center sm:justify-end gap-4 text-[11px]">
              <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" class="hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-colors">LinkedIn</a>
              <a href="mailto:saitezathmakuri2003@gmail.com" class="hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-colors">Email</a>
              <a href="tel:+918309229402" class="hover:text-[#415b06] dark:hover:text-[#8bab2a] transition-colors">Phone</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Click-Outside Backdrop for Menu -->
      <div *ngIf="isMenuOpen" class="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] transition-opacity animate-fade-in" (click)="closeMenu()"></div>

      <!-- Mobile Dropdown Popover Menu (Closes when clicked outside) -->
      <div *ngIf="isMenuOpen" 
           (click)="$event.stopPropagation()"
           class="fixed top-20 right-4 sm:right-6 z-[120] w-64 bg-[#faf6f0]/95 dark:bg-[#14110d]/95 backdrop-blur-2xl border border-[#415b06]/20 dark:border-[#8bab2a]/30 rounded-3xl p-4 shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in-down">
        
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#a89070] px-3 py-1 mb-1 border-b border-[#415b06]/10 dark:border-[#a89070]/10">
          Navigation
        </div>

        <a href="#home" (click)="setActive('home'); closeMenu()" [ngClass]="activeSection === 'home' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] font-bold' : 'text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10'" class="px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between">
          <span>Home</span>
          <i class="pi pi-home text-[10px] text-[#a89070]"></i>
        </a>
        <a href="#about" (click)="setActive('about'); closeMenu()" [ngClass]="activeSection === 'about' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] font-bold' : 'text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10'" class="px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between">
          <span>About</span>
          <i class="pi pi-user text-[10px] text-[#a89070]"></i>
        </a>
        <a href="#experience" (click)="setActive('experience'); closeMenu()" [ngClass]="activeSection === 'experience' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] font-bold' : 'text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10'" class="px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between">
          <span>Experience</span>
          <i class="pi pi-briefcase text-[10px] text-[#a89070]"></i>
        </a>
        <a href="#projects" (click)="setActive('projects'); closeMenu()" [ngClass]="activeSection === 'projects' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] font-bold' : 'text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10'" class="px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between">
          <span>Projects</span>
          <i class="pi pi-folder text-[10px] text-[#a89070]"></i>
        </a>
        <a href="#contact" (click)="setActive('contact'); closeMenu()" [ngClass]="activeSection === 'contact' ? 'bg-[#415b06]/15 dark:bg-[#8bab2a]/20 text-[#415b06] dark:text-[#8bab2a] font-bold' : 'text-[#1e1a14] dark:text-[#f5efe6] hover:bg-[#415b06]/10'" class="px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between">
          <span>Contact</span>
          <i class="pi pi-envelope text-[10px] text-[#a89070]"></i>
        </a>
        <div class="border-t border-[#415b06]/10 dark:border-[#a89070]/10 mt-1 pt-1.5">
          <a href="assets/Saiteja_Developer.pdf" target="_blank" (click)="closeMenu()" class="flex items-center justify-between px-3.5 py-2 rounded-2xl text-xs font-semibold bg-[#415b06]/10 text-[#415b06] dark:text-[#8bab2a] hover:bg-[#415b06]/20 transition-all">
            <span class="flex items-center gap-2">
              <i class="pi pi-file-pdf"></i>
              <span>Download Resume</span>
            </span>
            <i class="pi pi-download text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- Interactive AI Search & Filter Modal -->
      <div *ngIf="isSearchOpen" class="fixed inset-0 z-[60] flex items-start justify-center pt-[12vh] px-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity" (click)="closeSearch()"></div>
        
        <!-- Dialog -->
        <div class="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-down flex flex-col max-h-[75vh]">
          
          <!-- Search Header -->
          <div class="flex items-center px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <i class="pi pi-search text-primary mr-3 text-lg"></i>
            <input type="text" [(ngModel)]="searchQuery" (ngModelChange)="onSearchChange()" placeholder="Ask AI or search skills, projects, Shipconsole..." class="w-full bg-transparent border-none outline-none text-zinc-900 dark:text-white px-1 py-1 text-base placeholder-zinc-400 dark:placeholder-zinc-500 font-normal" autofocus>
            <button *ngIf="searchQuery" (click)="clearSearch()" class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mr-3 text-sm"><i class="pi pi-times-circle"></i></button>
            <button (click)="closeSearch()" class="text-xs font-mono px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">ESC</button>
          </div>

          <!-- Search Content Body -->
          <div class="p-5 overflow-y-auto flex-grow space-y-6">
            
            <!-- Quick Prompts / Default Suggestions -->
            <div *ngIf="!searchQuery" class="space-y-4">
              <div class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                <i class="pi pi-sparkles text-primary"></i> Try asking or filtering:
              </div>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let prompt of quickPrompts" (click)="setSearchQuery(prompt)" class="px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-all text-left border border-zinc-200/60 dark:border-zinc-700/60 flex items-center gap-2">
                  <i class="pi pi-bolt text-[10px] text-primary"></i>
                  <span>{{prompt}}</span>
                </button>
              </div>

              <div class="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">Popular Navigation</div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="#experience" (click)="closeSearch()" class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 hover:border-primary/50 transition-all block group">
                    <div class="font-semibold text-zinc-800 dark:text-zinc-200 text-xs group-hover:text-primary flex items-center justify-between">
                      <span>Shipconsole Experience</span>
                      <i class="pi pi-arrow-right text-[10px]"></i>
                    </div>
                    <div class="text-[11px] text-zinc-500 mt-1">PL/SQL, AWS &amp; SaaS Migrations</div>
                  </a>
                  <a href="#projects" (click)="closeSearch()" class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 hover:border-primary/50 transition-all block group">
                    <div class="font-semibold text-zinc-800 dark:text-zinc-200 text-xs group-hover:text-primary flex items-center justify-between">
                      <span>AI &amp; ML Projects</span>
                      <i class="pi pi-arrow-right text-[10px]"></i>
                    </div>
                    <div class="text-[11px] text-zinc-500 mt-1">Food AI, Traffic Surveillance, Spam ML</div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Filtered Results List -->
            <div *ngIf="searchQuery && filteredResults.length > 0" class="space-y-3">
              <div class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Found {{filteredResults.length}} matching item{{filteredResults.length > 1 ? 's' : ''}}
              </div>
              
              <a *ngFor="let item of filteredResults" [href]="item.link" (click)="closeSearch()" class="block p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 hover:border-primary dark:hover:border-primary/80 transition-all group">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-zinc-900 dark:text-white text-sm group-hover:text-primary transition-colors">{{item.title}}</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary rounded-md font-semibold">{{item.category}}</span>
                </div>
                <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{{item.description}}</p>
              </a>
            </div>

            <!-- Empty State -->
            <div *ngIf="searchQuery && filteredResults.length === 0" class="py-12 text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto text-zinc-400">
                <i class="pi pi-inbox text-xl"></i>
              </div>
              <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">No matching projects or skills found for "{{searchQuery}}"</p>
              <p class="text-xs text-zinc-500 max-w-sm mx-auto">Try searching for keywords like <strong class="text-zinc-700 dark:text-zinc-300">SQL, AWS, Java, Python, Shipconsole, or AI</strong>.</p>
            </div>

          </div>
          
          <!-- Modal Footer -->
          <div class="px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Powered by Saiteja's Knowledge Base</span>
            <span class="hidden sm:inline">Use arrow keys or click to navigate</span>
          </div>

        </div>
      </div>

      <!-- Built-In Interactive AI Assistant Chatbot at Bottom Right -->
      <app-ai-assistant></app-ai-assistant>
    </div>
  `,
  styles: [`
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-down {
      animation: fadeInDown 0.2s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px) translateX(-50%); }
      to { opacity: 1; transform: translateY(0) translateX(-50%); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.2s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.15s ease-out forwards;
    }
  `]
})
export class AppComponent implements OnInit {
  isDarkMode = true;
  scrollProgress = 0;
  isSearchOpen = false;
  isMenuOpen = false;

  searchQuery = '';
  filteredResults: SearchItem[] = [];

  quickPrompts = [
    'What is Saiteja\'s current database role?',
    'Show Machine Learning & AI projects',
    'List cloud and AWS certifications',
    'What are Saiteja\'s core backend skills?'
  ];

  knowledgeBase: SearchItem[] = [
    {
      title: 'Database Developer & ERP Expert at Shipconsole',
      category: 'Experience',
      description: 'Current role driving client migrations from on-premise infrastructure to Cloud/SaaS environments using PL/SQL and AWS.',
      link: '#experience',
      keywords: ['shipconsole', 'database', 'developer', 'erp', 'pl/sql', 'sql', 'aws', 'cloud', 'saas', 'migration', 'current', 'work', 'job', 'role', 'experience']
    },
    {
      title: 'Software Engineering Intern at Shipconsole',
      category: 'Experience',
      description: 'Gained hands-on expertise in PL/SQL, Spring, SpringBoot, AWS, Docker, and Git. Converted internship into a full-time role.',
      link: '#experience',
      keywords: ['intern', 'internship', 'shipconsole', 'spring', 'springboot', 'java', 'docker', 'git', 'conversion']
    },
    {
      title: 'Java Full Stack Development Trainee at QSpiders',
      category: 'Training',
      description: 'Intensive training in Java OOP, Spring Boot backend development, JDBC, SQL database optimization, and frontend tech.',
      link: '#experience',
      keywords: ['qspiders', 'jspiders', 'java', 'full stack', 'training', 'oop', 'spring boot', 'jdbc', 'sql']
    },
    {
      title: 'Web Development Intern at TechOctaNet Services',
      category: 'Experience',
      description: 'Developed and deployed responsive web interfaces using HTML5, CSS3, and JavaScript.',
      link: '#experience',
      keywords: ['techoctanet', 'octanet', 'web development', 'intern', 'html', 'css', 'javascript', 'frontend']
    },
    {
      title: 'Library Management System Project',
      category: 'Project',
      description: 'Increased system efficiency by 35% with automated book issue/return tracking, fine calculation, and email notification modules using Java, MySQL, and JDBC.',
      link: '#projects',
      keywords: ['library', 'management', 'system', 'java', 'mysql', 'jdbc', 'project', 'backend', 'automation']
    },
    {
      title: 'Food Recognition & Calorie Estimation using AI',
      category: 'Project / Research',
      description: 'Developed a CNN-based computer vision model with 92% accuracy using MobileNetV2. Published research paper at ICMDRI ranked in Top 15% for innovation.',
      link: '#projects',
      keywords: ['food', 'calorie', 'ai', 'cnn', 'mobilenetv2', 'tensorflow', 'keras', 'opencv', 'python', 'research', 'paper', 'icmdri', 'top 15%']
    },
    {
      title: 'Real-Time Traffic Surveillance System',
      category: 'Project',
      description: 'Built a real-time traffic surveillance system using CNNs and YOLOv7 with 96% detection accuracy and 30% speed boost via multithreading.',
      link: '#projects',
      keywords: ['traffic', 'surveillance', 'yolov7', 'cnn', 'opencv', 'deep learning', 'computer vision', 'python', 'multithreading']
    },
    {
      title: 'Spam Classifier using Machine Learning',
      category: 'Project',
      description: 'Developed an NLP spam detection system using Naïve Bayes and TF-IDF with 95% accuracy and 15% precision improvement via hyperparameter tuning.',
      link: '#projects',
      keywords: ['spam', 'classifier', 'nlp', 'natural language processing', 'naive bayes', 'tf-idf', 'machine learning', 'python', 'scikit-learn']
    },
    {
      title: 'AWS Cloud Essentials Badge & Certifications',
      category: 'Certification',
      description: 'Certified by AWS (Cloud Essentials), IBM SkillsBuild (Intro to AI), Great Learning (Java), and ServiceNow (Micro-Certification).',
      link: '#experience',
      keywords: ['aws', 'cloud', 'essentials', 'ibm', 'ai', 'service now', 'great learning', 'certification', 'license', 'badge']
    },
    {
      title: 'B.Tech in Computer Science (AI & ML)',
      category: 'Education',
      description: 'Graduated from Siddhartha Institute of Engineering and Technology (2021-2025) with 7.39 CGPA.',
      link: '#experience',
      keywords: ['education', 'b.tech', 'siddhartha', 'college', 'degree', 'ai', 'ml', 'computer science', 'cgpa']
    },
    {
      title: 'Core Technical Skills & Toolkit',
      category: 'Skills',
      description: 'SQL, PL/SQL, MS SQL Server, MySQL, AWS Cloud, Docker, Java, Python, C, Spring Boot, Angular, HTML/CSS/JS, Power BI, Git.',
      link: '#about',
      keywords: ['skills', 'toolkit', 'sql', 'pl/sql', 'java', 'python', 'spring', 'angular', 'power bi', 'docker', 'aws', 'database', 'backend']
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isDarkMode = false;
        document.documentElement.classList.remove('p-dark', 'dark');
      } else {
        document.documentElement.classList.add('p-dark', 'dark');
      }

      this.calculateScroll();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.calculateScroll();
  }

  activeSection = 'home';

  setActive(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.openSearch();
    }
    if (event.key === 'Escape') {
      if (this.isSearchOpen) this.closeSearch();
      if (this.isMenuOpen) this.closeMenu();
    }
  }

  calculateScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollable = documentHeight - windowHeight;
      
      if (totalScrollable > 0) {
        this.scrollProgress = (scrollPosition / totalScrollable) * 100;
      } else {
        this.scrollProgress = 100;
      }

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        this.activeSection = 'contact';
        return;
      }

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + windowHeight / 3;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          this.activeSection = sec;
          break;
        }
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('p-dark', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('p-dark', 'dark');
      localStorage.setItem('theme', 'light');
    }
  }

  openSearch() {
    this.isSearchOpen = true;
    this.isMenuOpen = false;
    this.searchQuery = '';
    this.filteredResults = [];
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.onSearchChange();
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredResults = [];
  }

  onSearchChange() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredResults = [];
      return;
    }
    this.filteredResults = this.knowledgeBase.filter(item => {
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCat = item.category.toLowerCase().includes(q);
      const inKeys = item.keywords.some(k => k.toLowerCase().includes(q));
      return inTitle || inDesc || inCat || inKeys;
    });
  }

  toggleMenu(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
