import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { StarFieldComponent } from './components/star-field/star-field.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';

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
  imports: [CommonModule, FormsModule, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, StarFieldComponent, AiAssistantComponent, CustomCursorComponent],
  template: `
    <!-- Interactive Golden Comet Cursor Trail (like andriiponomarenko.vercel.app) -->
    <app-custom-cursor></app-custom-cursor>

    <!-- Moving & Twinkling Star Field Background Animation -->
    <app-star-field></app-star-field>

    <div class="min-h-screen bg-transparent font-sans flex flex-col relative z-10">
      
      <!-- Minimalist Fixed Header Navigation -->
      <header class="fixed top-0 left-0 right-0 z-[100] py-3.5 bg-[#faf9f6]/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md border-b border-neutral-200/70 dark:border-neutral-800/70 transition-all">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          <!-- Left Logo -->
          <a href="#home" title="Saiteja Athmakuri" class="flex items-center gap-2 group">
            <img src="assets/logo.png?v=11" alt="SA" class="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105">
          </a>

          <!-- Center Minimalist Navigation Links -->
          <nav class="hidden sm:flex items-center gap-5 text-xs font-mono">
            <a href="#home" (click)="setActive('home')" 
               [ngClass]="activeSection === 'home' ? 'text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 decoration-[#b38e2e] dark:decoration-[#dfc378]' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'"
               class="transition-colors">Home</a>
            <a href="#about" (click)="setActive('about')" 
               [ngClass]="activeSection === 'about' ? 'text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 decoration-[#b38e2e] dark:decoration-[#dfc378]' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'"
               class="transition-colors">Stack</a>
            <a href="#experience" (click)="setActive('experience')" 
               [ngClass]="activeSection === 'experience' ? 'text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 decoration-[#b38e2e] dark:decoration-[#dfc378]' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'"
               class="transition-colors">Experience</a>
            <a href="#projects" (click)="setActive('projects')" 
               [ngClass]="activeSection === 'projects' ? 'text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 decoration-[#b38e2e] dark:decoration-[#dfc378]' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'"
               class="transition-colors">Projects</a>
            <a href="#contact" (click)="setActive('contact')" 
               [ngClass]="activeSection === 'contact' ? 'text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 decoration-[#b38e2e] dark:decoration-[#dfc378]' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'"
               class="transition-colors">Contact</a>
          </nav>

          <!-- Right Action Buttons -->
          <div class="flex items-center gap-2">
            <!-- Search Button -->
            <button (click)="openSearch()" title="Search or Ask" class="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              <i class="pi pi-search text-xs"></i>
            </button>

            <!-- Theme Toggle -->
            <button (click)="toggleTheme()" title="Toggle Theme" class="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
              <i class="pi text-xs" [ngClass]="isDarkMode ? 'pi-sun' : 'pi-moon'"></i>
            </button>

            <!-- Mobile Menu Button -->
            <button (click)="toggleMenu($event)" title="Menu" class="sm:hidden p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">
              <i class="pi text-xs" [ngClass]="isMenuOpen ? 'pi-times' : 'pi-bars'"></i>
            </button>
          </div>

        </div>
      </header>

      <!-- Mobile Dropdown Menu -->
      <div *ngIf="isMenuOpen" 
           (click)="$event.stopPropagation()"
           class="fixed top-14 right-4 z-[120] w-48 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 shadow-xl flex flex-col gap-1 sm:hidden text-xs font-mono">
        <a href="#home" (click)="setActive('home'); closeMenu()" class="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">Home</a>
        <a href="#about" (click)="setActive('about'); closeMenu()" class="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">Stack</a>
        <a href="#experience" (click)="setActive('experience'); closeMenu()" class="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">Experience</a>
        <a href="#projects" (click)="setActive('projects'); closeMenu()" class="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">Projects</a>
        <a href="#contact" (click)="setActive('contact'); closeMenu()" class="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact</a>
        <div class="border-t border-neutral-200 dark:border-neutral-800 pt-1 mt-1">
          <a href="assets/Saiteja_Database_Developer.pdf" target="_blank" (click)="closeMenu()" class="px-3 py-2 rounded-lg text-[#b38e2e] dark:text-[#dfc378] font-semibold flex items-center justify-between">
            <span>Resume</span>
            <i class="pi pi-download text-[10px]"></i>
          </a>
        </div>
      </div>

      <!-- Main Content Container -->
      <main class="flex-grow">
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-experience id="experience"></app-experience>
        <app-projects id="projects"></app-projects>
        <app-contact id="contact"></app-contact>
      </main>

      <!-- Minimalist Footer -->
      <footer class="border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 text-xs font-mono text-neutral-500">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; 2026 Saiteja Athmakuri</div>
          <div class="flex items-center gap-4">
            <a href="https://linkedin.com/in/saitejaathmakuri/" target="_blank" class="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">LinkedIn</a>
            <a href="https://github.com/SAITEJA-012" target="_blank" class="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
            <a href="mailto:saitejaa.connect@gmail.com" class="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      <!-- Search Modal -->
      <div *ngIf="isSearchOpen" class="fixed inset-0 z-[150] flex items-start justify-center pt-[15vh] px-4">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" (click)="closeSearch()"></div>
        
        <div class="relative w-full max-w-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] font-sans">
          
          <div class="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
            <i class="pi pi-search text-neutral-400 mr-2.5 text-sm"></i>
            <input 
              #searchInput 
              type="text" 
              [(ngModel)]="searchQuery" 
              (ngModelChange)="onSearchChange()" 
              placeholder="Search projects, skills, experience, or ask..." 
              class="w-full bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 cursor-text caret-[#b38e2e] dark:caret-[#dfc378]" 
              autofocus
            >
            <button (click)="closeSearch()" class="text-[11px] font-mono px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded">ESC</button>
          </div>

          <div class="p-4 overflow-y-auto space-y-3">
            <div *ngIf="!searchQuery" class="space-y-2 text-xs">
              <div class="text-[10px] font-mono uppercase text-neutral-400">Quick Searches</div>
              <div class="flex flex-wrap gap-1.5">
                <button *ngFor="let p of quickPrompts" (click)="setSearchQuery(p)" class="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:border-[#b38e2e] border border-transparent transition-all">
                  {{ p }}
                </button>
              </div>
            </div>

            <div *ngIf="searchQuery && filteredResults.length > 0" class="space-y-2">
              <a *ngFor="let r of filteredResults" [href]="r.link" (click)="navigateToItem(r.link, $event)" class="block p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/60 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all cursor-pointer">
                <div class="flex items-center justify-between text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                  <span>{{ r.title }}</span>
                  <span class="text-[10px] font-mono text-[#b38e2e] dark:text-[#dfc378]">{{ r.category }}</span>
                </div>
                <div class="text-[11px] text-neutral-500 mt-0.5">{{ r.description }}</div>
              </a>
            </div>

            <div *ngIf="searchQuery && filteredResults.length === 0" class="py-8 text-center text-xs text-neutral-500">
              No results found for "{{searchQuery}}"
            </div>
          </div>
        </div>
      </div>

      <!-- Built-In Minimalist Assistant -->
      <app-ai-assistant></app-ai-assistant>
    </div>
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  isDarkMode = false;
  isSearchOpen = false;
  isMenuOpen = false;
  activeSection = 'home';
  searchQuery = '';
  filteredResults: SearchItem[] = [];

  quickPrompts = [
    'Featured Projects',
    'Enterprise PL/SQL Migrations',
    'Food AI Research (ICMDRI)',
    'Java Spring Boot & AWS',
    'Database Developer Experience'
  ];

  knowledgeBase: SearchItem[] = [
    // --- Projects ---
    {
      title: 'Enterprise PL/SQL Migration Toolkit',
      category: 'Project',
      description: 'Production-ready PL/SQL procedures, cursors, and schema transformation engine built for zero-downtime AWS RDS migrations.',
      link: '#projects',
      keywords: ['project', 'projects', 'pl/sql', 'oracle', 'sql', 'aws', 'rds', 'database', 'migration', 'etl', 'stored procedures', 'toolkit']
    },
    {
      title: 'Food AI & Calorie Estimation',
      category: 'Project',
      description: 'ICMDRI published research paper. Deep learning CNN with MobileNetV2 achieving 92% classification accuracy for nutritional estimation.',
      link: '#projects',
      keywords: ['project', 'projects', 'food', 'ai', 'calorie', 'research', 'icmdri', 'mobilenetv2', 'cnn', 'python', 'tensorflow', 'opencv', 'machine learning']
    },
    {
      title: 'Real-Time Traffic Surveillance',
      category: 'Project',
      description: 'Computer vision vehicle density tracking pipeline leveraging YOLOv7 with multithreading and 96% mAP detection accuracy.',
      link: '#projects',
      keywords: ['project', 'projects', 'traffic', 'surveillance', 'yolov7', 'opencv', 'vision', 'python', 'multithreading', 'cctv', 'analytics']
    },
    {
      title: 'Library Automation & Management System',
      category: 'Project',
      description: 'Enterprise Java and MySQL institutional management system boosting fine calculation and issue/return efficiency by 35%.',
      link: '#projects',
      keywords: ['project', 'projects', 'library', 'java', 'mysql', 'jdbc', 'enterprise', 'management', 'sql optimization', 'backend']
    },
    {
      title: 'Saiteja Developer Portfolio & AI Assistant',
      category: 'Project',
      description: 'High-performance minimalist portfolio featuring interactive star-field canvas physics, custom cursor animations, and a conversational AI Assistant with serverless email dispatch.',
      link: '#projects',
      keywords: ['project', 'projects', 'portfolio', 'ai assistant', 'angular', 'typescript', 'tailwind', 'vercel', 'canvas', 'star field']
    },
    {
      title: 'Intelligent Spam Classifier',
      category: 'Project',
      description: 'Natural language processing engine using TF-IDF vectorization and ensemble learning with 98.4% precision.',
      link: '#projects',
      keywords: ['project', 'projects', 'spam', 'classifier', 'nlp', 'machine learning', 'python', 'scikit-learn', 'tf-idf']
    },

    // --- Experience ---
    {
      title: 'ShipConsole - Database Developer',
      category: 'Experience',
      description: 'Full-time role leading Oracle ERP database operations, writing robust PL/SQL packages, and executing zero-downtime AWS RDS cloud migrations.',
      link: '#experience',
      keywords: ['experience', 'work', 'job', 'shipconsole', 'database', 'developer', 'oracle', 'pl/sql', 'aws', 'rds', 'current', 'full-time']
    },
    {
      title: 'ShipConsole - Software Engineering Intern',
      category: 'Experience',
      description: 'Engineered complex SQL queries and PL/SQL procedures, converting directly to full-time based on high delivery impact.',
      link: '#experience',
      keywords: ['experience', 'work', 'intern', 'internship', 'shipconsole', 'sql', 'queries']
    },
    {
      title: 'QSpiders - Java Full Stack Trainee',
      category: 'Experience',
      description: 'Completed intensive full-stack engineering curriculum across Java 17, Spring Boot, MySQL, and Web Services.',
      link: '#experience',
      keywords: ['experience', 'training', 'qspiders', 'java', 'spring boot', 'trainee', 'full stack']
    },

    // --- Skills ---
    {
      title: 'Database Architecture & PL/SQL',
      category: 'Skills',
      description: 'Oracle PL/SQL, SQL query optimization, indexes, stored procedures, MySQL, and zero-downtime ETL.',
      link: '#about',
      keywords: ['skills', 'skill', 'stack', 'database', 'sql', 'pl/sql', 'oracle', 'mysql', 'tuning', 'indexing']
    },
    {
      title: 'Backend & Java Engineering',
      category: 'Skills',
      description: 'Java 17+, Spring Boot, Hibernate JPA, RESTful APIs, OOP, and Microservices architecture.',
      link: '#about',
      keywords: ['skills', 'skill', 'stack', 'java', 'spring', 'spring boot', 'backend', 'rest', 'api', 'microservices']
    },
    {
      title: 'Cloud & DevOps Toolkit',
      category: 'Skills',
      description: 'AWS (RDS, EC2), Docker containers, Git/GitHub, Linux environments, and CI/CD workflows.',
      link: '#about',
      keywords: ['skills', 'skill', 'stack', 'cloud', 'aws', 'rds', 'ec2', 'docker', 'devops', 'git']
    },
    {
      title: 'Frontend & UI Technologies',
      category: 'Skills',
      description: 'Angular, TypeScript, Tailwind CSS, PrimeNG, JavaScript, responsive modern web design.',
      link: '#about',
      keywords: ['skills', 'skill', 'stack', 'frontend', 'angular', 'typescript', 'tailwind', 'javascript', 'html', 'css']
    },

    // --- Education, Resume & Contact ---
    {
      title: 'B.Tech in Computer Science (AI & ML)',
      category: 'Education',
      description: 'Siddhartha Institute of Technology & Science, Hyderabad (Graduated 2025).',
      link: '#about',
      keywords: ['education', 'college', 'degree', 'btech', 'cse', 'ai', 'ml', 'siddhartha']
    },
    {
      title: 'Official Resume / CV',
      category: 'Resume',
      description: 'View or download the latest resume for Saiteja Athmakuri (Database Developer & Software Engineer).',
      link: 'assets/Saiteja_Database_Developer.pdf',
      keywords: ['resume', 'cv', 'download resume', 'view resume', 'pdf', 'profile']
    },
    {
      title: 'Get In Touch / Contact Saiteja',
      category: 'Contact',
      description: 'Email: saitejaa.connect@gmail.com | Phone: +91 8309229402 | Location: Hyderabad, India.',
      link: '#contact',
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'whatsapp', 'linkedin', 'github', 'location', 'message']
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      try {
        if (sessionStorage.getItem('scrollToTopOnRefresh') === 'true') {
          sessionStorage.removeItem('scrollToTopOnRefresh');
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      } catch (e) {}

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.isDarkMode = true;
        document.documentElement.classList.add('p-dark', 'dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('p-dark', 'dark');
      }
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  private initScrollReveal(): void {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }, 60);
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

  setActive(section: string) {
    this.activeSection = section;
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  openSearch() {
    this.isSearchOpen = true;
    this.searchQuery = '';
    this.filteredResults = [];
    setTimeout(() => {
      this.searchInput?.nativeElement?.focus();
    }, 50);
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  setSearchQuery(q: string) {
    this.searchQuery = q;
    this.onSearchChange();
  }

  onSearchChange() {
    const raw = this.searchQuery.toLowerCase().trim();
    if (!raw) {
      this.filteredResults = [];
      return;
    }

    // Stop words filter for natural conversational queries
    const stopWords = new Set(['a', 'an', 'the', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'me', 'my', 'his', 'is', 'are', 'show', 'tell', 'find', 'get', 'what', 'which', 'who', 'how', 'about']);
    const tokens = raw
      .replace(/[^\w\s\/-]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 0 && !stopWords.has(t));

    const queryTokens = tokens.length > 0 ? tokens : [raw];

    this.filteredResults = this.knowledgeBase.filter(item => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const cat = item.category.toLowerCase();
      const keywords = item.keywords.map(k => k.toLowerCase());

      // 1. Direct match on raw query
      if (title.includes(raw) || desc.includes(raw) || cat.includes(raw) || keywords.some(k => k.includes(raw))) {
        return true;
      }

      // 2. Plural / singular normalization (e.g. 'projects' -> 'project', 'skills' -> 'skill')
      const normalizedRaw = raw.endsWith('s') ? raw.slice(0, -1) : raw;
      if (normalizedRaw.length > 2 && (title.includes(normalizedRaw) || desc.includes(normalizedRaw) || cat.includes(normalizedRaw) || keywords.some(k => k.includes(normalizedRaw)))) {
        return true;
      }

      // 3. Token-based matching
      return queryTokens.some(token => {
        const normToken = token.endsWith('s') ? token.slice(0, -1) : token;
        return title.includes(token) || 
               desc.includes(token) || 
               cat.includes(token) || 
               keywords.some(k => k.includes(token) || (normToken.length > 2 && k.includes(normToken)));
      });
    });
  }

  navigateToItem(link: string, event?: Event) {
    if (event) event.preventDefault();
    this.closeSearch();
    if (link.startsWith('#')) {
      const sectionId = link.substring(1);
      this.setActive(sectionId);
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(link, '_blank');
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeSearch();
    this.closeMenu();
  }

  @HostListener('document:click')
  onDocClick() {
    this.closeMenu();
  }
}
