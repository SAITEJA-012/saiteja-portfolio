import { Component, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef, NgZone } from '@angular/core';
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
    <!-- Floating Minimal Trigger Button -->
    <div class="fixed bottom-6 right-6 z-[150]">
      <button 
        (click)="toggleChat()" 
        title="Ask AI Assistant"
        class="w-12 h-12 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 border border-neutral-700/30 dark:border-neutral-300/30 group">
        
        <!-- Subtle Gold Online Indicator -->
        <span class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#b38e2e] dark:bg-[#dfc378] rounded-full border-2 border-white dark:border-black animate-pulse"></span>
        
        <svg *ngIf="!isOpen" class="w-5 h-5 text-[#dfc378] dark:text-[#b38e2e] transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
        <i *ngIf="isOpen" class="pi pi-times text-sm"></i>
      </button>
    </div>

    <!-- Minimal Chat Popover -->
    <div *ngIf="isOpen" 
         class="fixed bottom-[80px] right-4 sm:right-6 z-[160] w-[320px] sm:w-[380px] h-[500px] bg-white/98 dark:bg-[#121212]/98 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up font-sans">
      
      <!-- Minimal Header -->
      <div class="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#b38e2e] dark:bg-[#dfc378] animate-pulse"></span>
          <span class="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Saiteja's AI Assistant</span>
          <span class="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 ml-1">online</span>
        </div>
        <div class="flex items-center gap-1">
          <button 
            (click)="clearChat()" 
            title="Clear chat" 
            class="text-neutral-400 hover:text-red-500 dark:hover:text-red-400 text-xs p-1.5 rounded-md hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center">
            <i class="pi pi-trash text-[11px]"></i>
          </button>
          <button 
            (click)="toggleChat()" 
            title="Close" 
            class="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 text-xs p-1.5 rounded-md hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center">
            <i class="pi pi-times text-[11px]"></i>
          </button>
        </div>
      </div>

      <!-- Messages Area -->
      <div #scrollContainer class="flex-grow overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
        <div *ngFor="let msg of messages" class="flex flex-col" [ngClass]="msg.sender === 'user' ? 'items-end' : 'items-start'">
          <div class="max-w-[85%] px-3.5 py-2 rounded-xl shadow-xs"
               [ngClass]="msg.sender === 'user' 
                 ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-br-xs' 
                 : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 rounded-bl-xs'">
            <div [innerHTML]="formatMessage(msg.text)"></div>
          </div>
          <span class="text-[9px] text-neutral-400 font-mono mt-0.5 px-1">{{ msg.time }}</span>
        </div>

        <div *ngIf="isTyping" class="flex items-start">
          <div class="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-xl text-neutral-400 text-xs flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-[#b38e2e] rounded-full animate-bounce"></span>
            <span class="w-1.5 h-1.5 bg-[#b38e2e] rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-1.5 h-1.5 bg-[#b38e2e] rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      </div>

      <!-- Quick Suggested Prompts in One Line -->
      <div *ngIf="messages.length <= 4 && !isTyping" class="px-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap">
        <button (click)="askQuestion('Who is Saiteja?')" 
                class="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400 hover:border-[#b38e2e] hover:text-[#b38e2e] transition-colors shrink-0">
          Who is Saiteja?
        </button>
        <button (click)="askQuestion('What are your projects?')" 
                class="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400 hover:border-[#b38e2e] hover:text-[#b38e2e] transition-colors shrink-0">
          Featured Projects
        </button>
        <button (click)="askQuestion('What are his PL/SQL & Java skills?')" 
                class="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400 hover:border-[#b38e2e] hover:text-[#b38e2e] transition-colors shrink-0">
          Technical Skills
        </button>
        <button (click)="askQuestion('How can I contact Saiteja?')" 
                class="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400 hover:border-[#b38e2e] hover:text-[#b38e2e] transition-colors shrink-0">
          Contact Info
        </button>
      </div>

      <!-- Input Bar -->
      <div class="p-2.5 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-end gap-1.5">
        <textarea 
          #chatInput
          [(ngModel)]="userInput" 
          (keydown)="onKeyDown($event)"
          (input)="adjustHeight()"
          rows="1"
          placeholder="What’s on your mind?" 
          class="flex-grow bg-white dark:bg-[#181818] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-xs px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-[#b38e2e] dark:focus:border-[#dfc378] cursor-text caret-[#b38e2e] resize-none max-h-24 leading-relaxed font-sans"
        ></textarea>
        <button 
          (click)="sendMessage()" 
          [disabled]="!userInput.trim()"
          class="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center disabled:opacity-30 transition-opacity shrink-0 mb-0.5">
          <i class="pi pi-arrow-up text-xs"></i>
        </button>
      </div>

    </div>
  `
})
export class AiAssistantComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('chatInput') private chatInput?: ElementRef<HTMLTextAreaElement>;

  isOpen = false;
  userInput = '';
  isTyping = false;

  private emailFlowState: 'idle' | 'awaiting_email_and_message' | 'awaiting_message' | 'awaiting_email' = 'idle';
  private senderEmail = '';
  private draftMessage = '';

  messages: ChatMessage[] = [
    {
      sender: 'ai',
      text: "Hello! I am Saiteja's AI assistant. Ask me about his projects, Oracle PL/SQL & Java skills, ShipConsole experience, or ask me to send him an email directly.",
      time: this.getCurrentTime()
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  clearChat(): void {
    this.messages = [
      {
        sender: 'ai',
        text: "Hello! I am Saiteja's AI assistant. Ask me about his projects, Oracle PL/SQL & Java skills, ShipConsole experience, or ask me to send him an email directly.",
        time: this.getCurrentTime()
      }
    ];
    this.emailFlowState = 'idle';
    this.senderEmail = '';
    this.draftMessage = '';
    this.userInput = '';
    if (this.chatInput) {
      this.chatInput.nativeElement.style.height = 'auto';
    }
    this.cdr.detectChanges();
    setTimeout(() => {
      this.scrollToBottom();
      this.chatInput?.nativeElement?.focus();
    }, 50);
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
    if (this.isOpen) {
      setTimeout(() => {
        this.scrollToBottom();
        this.chatInput?.nativeElement?.focus();
      }, 50);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Shift+Enter creates a new line in textarea
        setTimeout(() => this.adjustHeight(), 0);
      } else {
        // Enter without Shift sends the message
        event.preventDefault();
        this.sendMessage();
      }
    }
  }

  adjustHeight(): void {
    if (!this.chatInput) return;
    const el = this.chatInput.nativeElement;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }

  askQuestion(question: string): void {
    this.userInput = question;
    this.sendMessage();
  }

  async sendMessage(): Promise<void> {
    const text = this.userInput.trim();
    if (!text) return;

    if (text.toLowerCase() === 'clear' || text.toLowerCase() === 'clear chat' || text.toLowerCase() === 'reset') {
      this.clearChat();
      return;
    }

    this.messages.push({
      sender: 'user',
      text: text,
      time: this.getCurrentTime()
    });

    this.userInput = '';
    if (this.chatInput) {
      this.chatInput.nativeElement.style.height = 'auto';
    }
    this.isTyping = true;
    this.cdr.detectChanges();
    this.scrollToBottom();

    try {
      const reply = await this.processUserMessage(text);
      this.messages.push({
        sender: 'ai',
        text: reply,
        time: this.getCurrentTime()
      });
    } catch (err) {
      console.error('Error in AI assistant message:', err);
      this.messages.push({
        sender: 'ai',
        text: "You can reach Saiteja directly at [saitejaa.connect@gmail.com](mailto:saitejaa.connect@gmail.com) or WhatsApp +91 8309229402.",
        time: this.getCurrentTime()
      });
    } finally {
      this.isTyping = false;
      this.cdr.detectChanges();
      this.scrollToBottom();
    }
  }

  private isGeneralKnowledgeQuery(q: string): boolean {
    const s = q.toLowerCase().trim();
    return (
      s === 'contact' ||
      s.includes('contact') ||
      s === 'contact info' ||
      s === 'contact details' ||
      s.includes('how to reach') ||
      s.includes('how can i contact') ||
      s.includes('reach') ||
      s.includes('phone') ||
      s.includes('mobile') ||
      s.includes('whatsapp') ||
      s.includes('address') ||
      s.includes('location') ||
      s.includes('who is') ||
      s.includes('who are') ||
      s.includes('about') ||
      s.includes('owner') ||
      s.includes('project') ||
      s.includes('skill') ||
      s.includes('tech') ||
      s.includes('stack') ||
      s.includes('experience') ||
      s.includes('job') ||
      s.includes('work') ||
      s.includes('shipconsole') ||
      s.includes('resume') ||
      s.includes('cv') ||
      s.includes('education') ||
      s.includes('college') ||
      s.includes('degree') ||
      s === 'hi' ||
      s === 'hello' ||
      s === 'hey' ||
      s === 'help' ||
      s === 'email' ||
      s === 'what is your email' ||
      s === 'what is his email'
    );
  }

  private isEmailDispatchIntent(q: string): boolean {
    const s = q.toLowerCase().trim();
    if (
      s === 'what is his email' || 
      s === 'what is your email' || 
      s === 'his email' || 
      s === 'your email' || 
      s === 'email address' ||
      s === 'email' ||
      s.includes('what is the email') ||
      s === 'contact' ||
      s === 'contact info' ||
      s === 'contact details' ||
      s.includes('how can i contact')
    ) {
      return false;
    }

    return (
      s.includes('send mail') ||
      s.includes('send email') ||
      s.includes('send a mail') ||
      s.includes('send an email') ||
      s.includes('send him an email') ||
      s.includes('send him a mail') ||
      s.includes('send him email') ||
      s.includes('send him mail') ||
      s.includes('drop an email') ||
      s.includes('drop a mail') ||
      s.includes('drop email') ||
      s.includes('drop mail') ||
      s.includes('drop him an email') ||
      s.includes('drop him a mail') ||
      s.includes('drop him email') ||
      s.includes('drop him mail') ||
      s.includes('email him') ||
      s.includes('mail him') ||
      s.includes('write an email') ||
      s.includes('write a mail') ||
      s.includes('write email') ||
      s.includes('write mail') ||
      s.includes('write to him') ||
      s.includes('compose mail') ||
      s.includes('compose email') ||
      s.includes('send message') ||
      s.includes('send a message') ||
      s.includes('send him a message') ||
      s.includes('drop a message') ||
      s.includes('drop him a message') ||
      s.includes('message him') ||
      s.includes('leave a message') ||
      s.includes('leave him a message') ||
      s.includes('forward a message') ||
      s.includes('contact him for me') ||
      s.includes('reach out to him for me') ||
      s === 'mail' ||
      s === 'send mail' ||
      s === 'send email'
    );
  }

  private extractEmail(text: string): string | null {
    const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i);
    return match ? match[0] : null;
  }

  private async sendEmailToSaiteja(senderEmail: string, content: string): Promise<boolean> {
    try {
      const res = await fetch('https://formsubmit.co/ajax/saitejaa.connect@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `Portfolio Visitor (${senderEmail})`,
          email: senderEmail,
          _subject: `New Portfolio Message from ${senderEmail}`,
          message: content,
          _replyto: senderEmail
        })
      });
      return res.ok;
    } catch (e) {
      console.warn('Formsubmit notification notice:', e);
      return false;
    }
  }

  private async processUserMessage(rawText: string): Promise<string> {
    const text = rawText.trim();
    const q = text.toLowerCase();
    const foundEmail = this.extractEmail(text);

    // Cancel / Exit active email flow or break out if asking a regular question
    if (this.emailFlowState !== 'idle') {
      if (q === 'cancel' || q === 'stop' || q === 'exit' || q === 'nevermind') {
        this.emailFlowState = 'idle';
        this.senderEmail = '';
        this.draftMessage = '';
        return "No problem, email sending canceled! What else can I help you with?";
      }

      // If user asks for contact info or any standard knowledge, exit email flow and show the info immediately!
      if (this.isGeneralKnowledgeQuery(q) && !foundEmail && !this.isEmailDispatchIntent(q)) {
        this.emailFlowState = 'idle';
        this.senderEmail = '';
        this.draftMessage = '';
        return this.generateResponse(q);
      }
    }

    // 1. Handling active Email Dispatch flow
    if (this.emailFlowState === 'awaiting_email_and_message') {
      if (foundEmail) {
        const cleanedMessage = text.replace(foundEmail, '').trim();
        if (cleanedMessage) {
          // User provided both email and message in this turn
          await this.sendEmailToSaiteja(foundEmail, cleanedMessage);
          this.emailFlowState = 'idle';
          this.senderEmail = '';
          this.draftMessage = '';
          return `✅ **Email Dispatched to Saiteja!**\n\n` +
                 `I have sent your message to Saiteja at **saitejaa.connect@gmail.com** on behalf of **${foundEmail}**.\n\n` +
                 `• **Your Message:** "${cleanedMessage}"\n` +
                 `• **Reply-To:** ${foundEmail}\n\n` +
                 `He will review it and reply directly to your email shortly!`;
        } else {
          // User provided only the email
          this.senderEmail = foundEmail;
          this.emailFlowState = 'awaiting_message';
          return `Got your email: **${foundEmail}**! 👍\n\n` +
                 `Now, what **message** would you like me to deliver to Saiteja?`;
        }
      } else {
        // User provided the message first
        this.draftMessage = text;
        this.emailFlowState = 'awaiting_email';
        return `Got your message: *" ${text} "* 📝\n\n` +
               `Please share **your email address** so Saiteja can reply to you directly!`;
      }
    }

    if (this.emailFlowState === 'awaiting_message') {
      const email = this.senderEmail;
      const message = text;
      await this.sendEmailToSaiteja(email, message);
      this.emailFlowState = 'idle';
      this.senderEmail = '';
      this.draftMessage = '';
      return `✅ **Email Dispatched to Saiteja!**\n\n` +
             `I have delivered your message to Saiteja at **saitejaa.connect@gmail.com** from **${email}**.\n\n` +
             `• **Your Message:** "${message}"\n` +
             `• **Status:** Successfully sent\n\n` +
             `He will review it and reply directly to **${email}**!`;
    }

    if (this.emailFlowState === 'awaiting_email') {
      if (foundEmail) {
        const email = foundEmail;
        const message = this.draftMessage || 'Connection inquiry via Portfolio AI Assistant';
        await this.sendEmailToSaiteja(email, message);
        this.emailFlowState = 'idle';
        this.senderEmail = '';
        this.draftMessage = '';
        return `✅ **Email Dispatched to Saiteja!**\n\n` +
               `I have sent your message to Saiteja at **saitejaa.connect@gmail.com** on behalf of **${email}**.\n\n` +
               `• **Your Message:** "${message}"\n` +
               `• **Reply-To:** ${email}\n\n` +
               `He will review it and reply directly to **${email}** shortly!`;
      } else {
        return `I couldn't detect a valid email address. Please share **your email address** (e.g. yourname@domain.com) so Saiteja can get back to you! *(or type 'contact' to view his details)*`;
      }
    }

    // 2. Direct intent to drop/send an email
    if (this.isEmailDispatchIntent(q)) {
      if (foundEmail) {
        const cleanedMessage = text.replace(foundEmail, '').trim();
        const finalMessage = cleanedMessage || 'Direct inquiry via AI Assistant';
        await this.sendEmailToSaiteja(foundEmail, finalMessage);
        return `✅ **Email Sent to Saiteja!**\n\n` +
               `I have sent your message to Saiteja at **saitejaa.connect@gmail.com** from **${foundEmail}**.\n\n` +
               `• **Message:** "${finalMessage}"\n\n` +
               `He will reply to your email shortly!`;
      } else {
        this.emailFlowState = 'awaiting_email_and_message';
        return `I would be happy to send an email directly to Saiteja for you! ✉️\n\n` +
               `Please share:\n` +
               `1. **Your Email Address** (so he knows where to reply)\n` +
               `2. **Your Message**\n\n` +
               `*(You can reply with both together, or just your email first!)*`;
      }
    }

    // 3. User provides an email address spontaneously
    if (foundEmail && (q.includes('send') || q.includes('hire') || q.includes('contact') || q.includes('connect') || q.includes('message') || q.includes('meet') || q.includes('job') || q.includes('opportunity'))) {
      const cleanedMessage = text.replace(foundEmail, '').trim();
      await this.sendEmailToSaiteja(foundEmail, cleanedMessage || 'Connection request via Portfolio AI Assistant');
      return `✅ **Email Dispatched to Saiteja!**\n\n` +
             `I've delivered your message to Saiteja at **saitejaa.connect@gmail.com** from **${foundEmail}**. He will review and reply directly to your inbox!`;
    }

    // 4. Default portfolio knowledge routing
    return this.generateResponse(q);
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
    if (!text) return '';
    return text
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#b38e2e] dark:text-[#dfc378] underline underline-offset-2 hover:opacity-80">$1</a>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  }

  private generateResponse(query: string): string {
    const q = (query || '').toLowerCase().trim();

    // 1. Greetings
    if (q === 'hi' || q === 'hello' || q === 'hey' || q.startsWith('hi ') || q.startsWith('hello ') || q.includes('good morning') || q.includes('good afternoon') || q.includes('help') || q.includes('what can you do')) {
      return "Hello! 👋 I am Saiteja's portfolio assistant. What would you like to know? You can ask about his **contact details**, **featured projects**, **technical skills**, **ShipConsole experience**, or ask me to **send mail** directly.";
    }

    // 2. Portfolio Owner / Name / Creator / Identity Inquiries
    if (
      q.includes('owner') ||
      q.includes('creator') ||
      q.includes('author') ||
      q.includes('whose portfolio') ||
      q.includes('portfolio owner') ||
      q.includes('owner name') ||
      q.includes('his name') ||
      q.includes('your name') ||
      q.includes('what is the name') ||
      q.includes('what is your name') ||
      q.includes('what is his name') ||
      q === 'name' ||
      q.includes('who built this') ||
      q.includes('who made this') ||
      q.includes('who created this')
    ) {
      return "👤 **Portfolio Owner:**\nThis portfolio belongs to **Saiteja Athmakuri**, an enterprise Database Developer at ShipConsole based in Hyderabad, India.";
    }

    // 3. Specific Single-Field Inquiries (Direct, crisp answers)
    if (q === 'address' || q.includes('address') || q.includes('location') || q.includes('where do you live') || q.includes('where does he live') || q.includes('where are you from') || q.includes('where is he from') || q.includes('which city') || q.includes('where is he based') || q.includes('where are you located')) {
      return "📍 **Location / Address:**\nHyderabad, India (IST)";
    }

    if (q === 'email' || q === 'what is his email' || q === 'what is your email' || q.includes('email address') || q.includes('his email') || q.includes('your email')) {
      return "✉️ **Email Address:**\n[saitejaa.connect@gmail.com](mailto:saitejaa.connect@gmail.com)";
    }

    if (q === 'phone' || q === 'whatsapp' || q.includes('phone number') || q.includes('mobile') || q.includes('whatsapp number') || q.includes('contact number')) {
      return "📱 **Phone / WhatsApp:**\n+91 8309229402";
    }

    if (q === 'linkedin' || q.includes('linkedin profile') || q.includes('linkedin url') || q.includes('linkedin link')) {
      return "💼 **LinkedIn Profile:**\n[linkedin.com/in/saitejaathmakuri](https://linkedin.com/in/saitejaathmakuri/)";
    }

    if (q === 'github' || q.includes('github profile') || q.includes('github url') || q.includes('github link') || q.includes('git profile') || q.includes('repositories')) {
      return "🐙 **GitHub Profile:**\n[github.com/SAITEJA-012](https://github.com/SAITEJA-012)";
    }

    // 3. General Contact / Reach Out / Hire
    if (q.includes('contact') || q.includes('reach') || q.includes('hire') || q.includes('touch') || q.includes('connect')) {
      return "📬 **Contact Details for Saiteja Athmakuri:**\n\n" +
             "• **Email:** [saitejaa.connect@gmail.com](mailto:saitejaa.connect@gmail.com)\n" +
             "• **Phone / WhatsApp:** +91 8309229402\n" +
             "• **LinkedIn:** [linkedin.com/in/saitejaathmakuri](https://linkedin.com/in/saitejaathmakuri/)\n" +
             "• **GitHub:** [github.com/SAITEJA-012](https://github.com/SAITEJA-012)\n" +
             "• **Location:** Hyderabad, India (IST)\n\n" +
             "💡 *Want me to send him an email directly? Just say 'Send mail' and I will deliver your note!*";
    }

    // 3. Resume / CV
    if (q.includes('resume') || q.includes('cv') || q.includes('pdf') || q.includes('download')) {
      return "📄 **Saiteja's Resume:**\n\n" +
             "You can view or download his official resume directly here: [Saiteja_Database_Developer.pdf](assets/Saiteja_Database_Developer.pdf).\n" +
             "You can also use the **Resume** button at the top right of the page or in the Contact section.";
    }

    // 5. Projects / Selected Work / Research / Specific projects
    if (q.includes('project') || q.includes('apps') || q.includes('food') || q.includes('traffic') || q.includes('yolo') || q.includes('spam') || q.includes('library') || q.includes('task management') || q.includes('research') || q.includes('icmdri') || q.includes('what has he built') || q.includes('what did he build') || (q.includes('work') && !q.includes('where does he work') && !q.includes('shipconsole'))) {
      return "🚀 **Saiteja's Featured Projects:**\n\n" +
             "1. **Enterprise PL/SQL Migration Toolkit:** Automated zero-downtime schema & ETL migration engine for AWS RDS migrations.\n" +
             "2. **Food AI & Calorie Estimation:** Published research at ICMDRI (Top 15% innovation) with MobileNetV2 (92% accuracy).\n" +
             "3. **Real-Time Traffic Surveillance:** YOLOv7 vehicle tracking pipeline with 96% detection mAP and multithreading.\n" +
             "4. **Library Automation System:** Institutional Java & MySQL management system (+35% operational efficiency).\n" +
             "5. **Cloud-Native Task Management API:** Spring Boot & Angular microservices containerized with Docker on AWS EC2.\n" +
             "6. **Intelligent Spam Classifier:** Machine Learning NLP pipeline with TF-IDF and ensemble classifiers (98.4% precision).";
    }

    // 5. Skills / Tech Stack / Database / Backend
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('sql') || q.includes('pl/sql') || q.includes('plsql') || q.includes('java') || q.includes('spring') || q.includes('aws') || q.includes('docker') || q.includes('database') || q.includes('python') || q.includes('language') || q.includes('toolkit')) {
      return "🛠️ **Technical Core Skills:**\n\n" +
             "• **Database Engineering:** Oracle PL/SQL, Stored Procedures, Cursors, Query Performance Tuning, MySQL, JDBC\n" +
             "• **Backend Development:** Java 17+, Spring Boot, Hibernate JPA, RESTful Microservices, OOP\n" +
             "• **Cloud & DevOps:** AWS (RDS, EC2), Docker Containers, Git & GitHub, Linux\n" +
             "• **Frontend & AI:** Angular, TypeScript, Tailwind CSS, Python, TensorFlow, OpenCV";
    }

    // 6. Experience / ShipConsole / Internship / Job / Career
    if (q.includes('experience') || q.includes('shipconsole') || q.includes('job') || q.includes('intern') || q.includes('company') || q.includes('role') || q.includes('work') || q.includes('qspiders') || q.includes('career')) {
      return "💼 **Professional Experience:**\n\n" +
             "• **Database Developer at ShipConsole** (Feb 2026 – Present, Hyderabad):\n" +
             "  Leading Oracle ERP database operations, writing robust PL/SQL packages, and executing zero-downtime AWS RDS cloud migrations.\n" +
             "• **Software Engineering Intern at ShipConsole** (Nov 2025 – Jan 2026):\n" +
             "  Built optimized SQL procedures and earned a full-time conversion offer.\n" +
             "• **Java Full Stack Trainee at QSpiders** (Jul 2025 – Oct 2025):\n" +
             "  Intensive training in Java 17, Spring Boot, MySQL, and full-stack architecture.";
    }

    // 7. Education / Degree / College / Certifications
    if (q.includes('edu') || q.includes('degree') || q.includes('college') || q.includes('btech') || q.includes('b.tech') || q.includes('siddhartha') || q.includes('cert') || q.includes('study') || q.includes('studied') || q.includes('graduate')) {
      return "🎓 **Education & Certifications:**\n\n" +
             "• **B.Tech in Computer Science (AI & ML):** Siddhartha Institute of Technology & Science, Hyderabad (Graduated 2025).\n" +
             "• **Certifications:** AWS Cloud Essentials, IBM SkillsBuild AI, Great Learning Java, ServiceNow Micro-Certification, Oracle SQL Fundamentals.";
    }

    // 8. Identity / Bio / Who is Saiteja (only specific questions about his identity/overview)
    if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('introduce') || q.includes('profile') || q === 'saiteja' || q.includes('tell me about')) {
      return "👤 **Saiteja Athmakuri** is an enterprise Database Developer at ShipConsole based in Hyderabad, India.\n\n" +
             "• **Specialization:** Oracle PL/SQL, Zero-Downtime AWS RDS Migrations, and Java Spring Boot Backends.\n" +
             "• **Current Role:** Database Developer at ShipConsole (Feb 2026 – Present).\n" +
             "• **Research:** Published deep learning research at ICMDRI (Food AI Calorie Estimation, 92% Accuracy).\n" +
             "• **Education:** B.Tech in CSE (AI & ML) from Siddhartha Institute of Technology & Science (2025).";
    }

    // 9. Fallback
    return "💡 **Saiteja Athmakuri Portfolio Assistant:**\n\n" +
           "I can answer questions about:\n" +
           "• **Contact:** *'How can I contact Saiteja?'*\n" +
           "• **Send Email:** *'Send mail to Saiteja'*\n" +
           "• **Projects:** *'What are his featured projects?'*\n" +
           "• **Skills:** *'What are his PL/SQL and Java skills?'*\n" +
           "• **Experience:** *'Where does he work?'*\n" +
           "• **Resume:** *'Show me his resume'*";
  }
}
