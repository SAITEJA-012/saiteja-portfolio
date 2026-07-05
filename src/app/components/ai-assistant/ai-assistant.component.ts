import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Floating Trigger Button at Bottom Right -->
    <div class="fixed bottom-6 right-6 z-[150]">
      <button 
        (click)="toggleChat()" 
        title="Ask AI Assistant about Saiteja"
        class="w-14 h-14 rounded-full bg-gradient-to-tr from-[#415b06] via-[#557210] to-[#8bab2a] text-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 relative group border-2 border-white/20">
        
        <!-- Online Pulsing Badge -->
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#14110d] animate-pulse"></span>
        
        <!-- Custom SVG AI Sparkles / Star Cluster Icon -->
        <svg *ngIf="!isOpen" class="w-8 h-8 text-white transition-all duration-500 group-hover:rotate-180 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          <path d="M19 2L20 5L23 6L20 7L19 10L18 7L15 6L18 5L19 2Z" opacity="0.8" />
          <path d="M5 16L6 18.5L8.5 19.5L6 20.5L5 23L4 20.5L1.5 19.5L4 18.5L5 16Z" opacity="0.7" />
        </svg>
        <i *ngIf="isOpen" class="pi pi-times text-xl text-white rotate-90 transition-transform"></i>
        
        <!-- Tooltip on Hover -->
        <span *ngIf="!isOpen" class="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#1e1a14] dark:bg-white text-white dark:text-[#1e1a14] text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
          Ask AI about Saiteja ✨
        </span>
      </button>
    </div>

    <!-- Chat Popover Window -->
    <div *ngIf="isOpen" 
         class="fixed bottom-24 right-4 sm:right-6 z-[160] w-[330px] sm:w-[385px] h-[520px] bg-white/95 dark:bg-[#14110d]/95 backdrop-blur-2xl border border-[#415b06]/20 dark:border-[#8bab2a]/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
      
      <!-- Chat Header -->
      <div class="px-5 py-4 bg-gradient-to-r from-[#415b06] to-[#557210] dark:from-[#293803] dark:to-[#415b06] text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-bold text-base border border-white/20">
            <svg class="w-5 h-5 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              <path d="M19 2L20 5L23 6L20 7L19 10L18 7L15 6L18 5L19 2Z" opacity="0.8" />
              <path d="M5 16L6 18.5L8.5 19.5L6 20.5L5 23L4 20.5L1.5 19.5L4 18.5L5 16Z" opacity="0.7" />
            </svg>
          </div>
          <div>
            <div class="font-bold text-sm leading-tight">Saiteja AI Assistant</div>
            <div class="text-[10px] text-white/80 font-mono flex items-center gap-1 mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online &bull; Portfolio Knowledge Bot
            </div>
          </div>
        </div>
        <button (click)="toggleChat()" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
          <i class="pi pi-minus text-sm"></i>
        </button>
      </div>

      <!-- Messages Scroll Area -->
      <div #scrollContainer class="flex-grow overflow-y-auto p-4 space-y-3.5 font-sans text-xs sm:text-sm">
        
        <!-- Welcome Note -->
        <div class="text-center my-2">
          <span class="px-3 py-1 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 text-[#415b06] dark:text-[#8bab2a] text-[10px] font-mono font-bold">
            PORTFOLIO KNOWLEDGE ENGINE
          </span>
        </div>

        <!-- Chat Bubble Loop -->
        <div *ngFor="let msg of messages" class="flex flex-col" [ngClass]="msg.sender === 'user' ? 'items-end' : 'items-start'">
          <div class="max-w-[85%] px-4 py-2.5 rounded-2xl leading-relaxed shadow-sm"
               [ngClass]="msg.sender === 'user' 
                 ? 'bg-[#415b06] dark:bg-[#6a8c1a] text-white rounded-br-none' 
                 : 'bg-[#faf6f0] dark:bg-[#1e1a14] text-[#1e1a14] dark:text-[#f5efe6] border border-[#415b06]/15 rounded-bl-none'">
            <div [innerHTML]="formatMessage(msg.text)"></div>
          </div>
          <span class="text-[9px] text-[#a89070] font-mono mt-1 px-1">{{ msg.time }}</span>
        </div>

        <!-- Typing Indicator -->
        <div *ngIf="isTyping" class="flex items-start">
          <div class="bg-[#faf6f0] dark:bg-[#1e1a14] border border-[#415b06]/15 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#415b06] dark:bg-[#8bab2a] animate-bounce"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#415b06] dark:bg-[#8bab2a] animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#415b06] dark:bg-[#8bab2a] animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>

      </div>

      <!-- Quick Suggested Prompt Pills -->
      <div *ngIf="messages.length <= 3 && !isTyping" class="px-4 pb-2 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
        <button (click)="askQuestion('Who is the owner of this portfolio?')" 
                class="px-2.5 py-1 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 hover:bg-[#415b06]/20 text-[#415b06] dark:text-[#8bab2a] text-[11px] font-medium transition-all text-left">
          👤 Who is the Owner?
        </button>
        <button (click)="askQuestion('Tell me about Saiteja ERP & Shipconsole experience')" 
                class="px-2.5 py-1 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 hover:bg-[#415b06]/20 text-[#415b06] dark:text-[#8bab2a] text-[11px] font-medium transition-all text-left">
          💼 Shipconsole ERP Role
        </button>
        <button (click)="askQuestion('What are Saiteja core database and Java skills?')" 
                class="px-2.5 py-1 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 hover:bg-[#415b06]/20 text-[#415b06] dark:text-[#8bab2a] text-[11px] font-medium transition-all text-left">
          🛠️ Technical Skills
        </button>
        <button (click)="askQuestion('How can I contact or hire Saiteja?')" 
                class="px-2.5 py-1 rounded-full bg-[#415b06]/10 dark:bg-[#8bab2a]/15 hover:bg-[#415b06]/20 text-[#415b06] dark:text-[#8bab2a] text-[11px] font-medium transition-all text-left">
          📧 Contact &amp; Hire
        </button>
      </div>

      <!-- Input Bar -->
      <div class="p-3 bg-[#faf6f0]/90 dark:bg-[#1e1a14]/80 border-t border-[#415b06]/15 flex items-center gap-2">
        <input 
          type="text" 
          [(ngModel)]="userInput" 
          (keyup.enter)="sendMessage()"
          placeholder="Ask anything about Saiteja..." 
          class="flex-grow bg-white dark:bg-[#14110d] text-[#1e1a14] dark:text-[#f5efe6] placeholder-[#a89070] text-xs px-3.5 py-2.5 rounded-xl border border-[#415b06]/20 focus:outline-none focus:border-[#415b06] dark:focus:border-[#8bab2a] transition-all"
        />
        <button 
          (click)="sendMessage()" 
          [disabled]="!userInput.trim()"
          class="w-10 h-10 rounded-xl bg-[#415b06] dark:bg-[#6a8c1a] hover:bg-[#557210] text-white flex items-center justify-center disabled:opacity-40 transition-all shrink-0">
          <i class="pi pi-send text-xs"></i>
        </button>
      </div>

    </div>
  `
})
export class AiAssistantComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  isOpen = false;
  userInput = '';
  isTyping = false;

  messages: ChatMessage[] = [
    {
      sender: 'ai',
      text: "Hello! ✨ I am Saiteja's AI Assistant. You can ask me anything about his portfolio, such as who is the owner, what is his title at Shipconsole, his PL/SQL & Java skills, or how to contact him!",
      time: this.getCurrentTime()
    }
  ];

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  askQuestion(question: string): void {
    this.userInput = question;
    this.sendMessage();
  }

  sendMessage(): void {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({
      sender: 'user',
      text: text,
      time: this.getCurrentTime()
    });

    this.userInput = '';
    this.isTyping = true;
    this.scrollToBottom();

    // Simulate AI thinking and reply
    setTimeout(() => {
      this.isTyping = false;
      const reply = this.generateResponse(text);
      this.messages.push({
        sender: 'ai',
        text: reply,
        time: this.getCurrentTime()
      });
      this.scrollToBottom();
    }, 500);
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer && this.scrollContainer.nativeElement) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  formatMessage(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  }

  private generateResponse(query: string): string {
    const q = query.toLowerCase();

    // 1. Owner / Name / Who built this / Whose portfolio
    if (q.includes('owner') || q.includes('name') || q.includes('who is') || q.includes('who built') || q.includes('who created') || q.includes('whose') || q.includes('about saiteja')) {
      return "👤 **Portfolio Owner:**\nThis portfolio belongs to **Saiteja Athmakuri**, an enterprise Database Engineer, ERP Expert, and Full-Stack Developer based in Hyderabad, India. He currently drives Oracle ERP to AWS RDS migrations at Shipconsole!";
    }

    // 2. Job / Title / Current Role / Shipconsole / ERP
    if (q.includes('erp') || q.includes('shipconsole') || q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('role') || q.includes('company') || q.includes('position')) {
      return "💼 **Current Role & Experience:**\nSaiteja works as a **Database Developer & ERP Expert** at Shipconsole in Hyderabad (Feb 2026 – Present). He previously completed a Software Engineering Internship there (Nov 2025 – Jan 2026), earning a full-time conversion offer! He specializes in PL/SQL packages, Oracle migrations, and zero-downtime AWS RDS cloud integrations.";
    }

    // 3. Skills / Tech Stack / SQL / Java
    if (q.includes('skill') || q.includes('sql') || q.includes('java') || q.includes('tech') || q.includes('stack') || q.includes('pl/sql') || q.includes('language') || q.includes('framework') || q.includes('angular') || q.includes('aws') || q.includes('cloud')) {
      return "🛠️ **Core Technical Toolkit:**\n• **Database:** SQL, PL/SQL, Oracle, MySQL, JDBC, Schema Optimization (**92% proficiency**)\n• **Backend & Full Stack:** Java, Spring Boot, Object-Oriented Programming (**88% proficiency**)\n• **Cloud & DevOps:** AWS RDS/EC2, Docker, Git, Cloud Migrations\n• **Frontend:** HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind\n• **AI/DS:** Python, TensorFlow, OpenCV, Power BI";
    }

    // 4. Projects / AI / Research / Food / Traffic / Library
    if (q.includes('ai') || q.includes('ml') || q.includes('project') || q.includes('food') || q.includes('traffic') || q.includes('research') || q.includes('build') || q.includes('library') || q.includes('icmdri')) {
      return "🚀 **Featured Projects & Research:**\n1. **Food AI & Calorie Estimation:** Published AI research at ICMDRI (Top 15% innovation). Built a CNN model with MobileNetV2 achieving **92% accuracy**.\n2. **Real-Time Traffic Surveillance:** YOLOv7 computer vision pipeline with **96% accuracy** and multithreading.\n3. **Library Management System:** Java & MySQL automated system boosting fine calculation efficiency by **35%**.\n4. **PL/SQL Migration Toolkit:** Automated schema cleansing packages for Shipconsole clients.";
    }

    // 5. Contact / Email / Phone / LinkedIn / Hire
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('call') || q.includes('mail') || q.includes('linkedin') || q.includes('location')) {
      return "📧 **Get In Touch with Saiteja:**\n• **Email:** saitezathmakuri2003@gmail.com\n• **Phone:** +91 8309229402\n• **LinkedIn:** linkedin.com/in/saitejaathmakuri\n• **Location:** Hyderabad, Telangana, India (GMT+5:30)\n\nHe is currently **open to work** and available for database engineering and full-stack collaborations!";
    }

    // 6. Education / Degree / College / Certifications
    if (q.includes('edu') || q.includes('study') || q.includes('college') || q.includes('degree') || q.includes('b.tech') || q.includes('siddhartha') || q.includes('cert')) {
      return "🎓 **Education & Certifications:**\n• **Degree:** B.Tech in Computer Science (AI & ML) from Siddhartha Institute of Technology & Science (Graduated 2025).\n• **Certifications:** AWS Cloud Essentials, IBM SkillsBuild AI, Great Learning Java, ServiceNow Micro-Cert, and Oracle SQL Fundamentals.";
    }

    // 7. Greetings
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('what can you do') || q.includes('help')) {
      return "Hello! 👋 I am Saiteja's built-in AI Assistant. I can tell you who the portfolio owner is (**Saiteja Athmakuri**), explain his PL/SQL and Java skills, detail his Shipconsole ERP work, or share his contact info. What would you like to explore?";
    }

    // 8. Default fallback with comprehensive profile
    return "💡 **About Saiteja Athmakuri:**\nSaiteja is the owner of this portfolio! He is an enterprise **Database Engineer & Full-Stack Developer** at Shipconsole in Hyderabad.\n\n• **Key Expertise:** PL/SQL, Java, Spring Boot, AWS RDS Migrations, and AI/ML pipelines.\n• **Contact:** saitezathmakuri2003@gmail.com\n\nFeel free to ask me specifically about his skills, projects, education, or contact details!";
  }
}
