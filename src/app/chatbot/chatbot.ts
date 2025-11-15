import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat, ChatMessage } from '../services/chat';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  messages = signal<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your cyber security assistant. How can I help you stay safe online today?'
    }
  ]);
  userInput = '';
  isLoading = signal(false);
  
  constructor(private chatService: Chat) {}
  
  sendMessage(): void {
    const input = this.userInput.trim();
    if (!input || this.isLoading()) return;
    
    // Add user message
    this.messages.update(msgs => [...msgs, { role: 'user', content: input }]);
    this.userInput = '';
    this.isLoading.set(true);
    
    // Send to API
    this.chatService.sendMessage(this.messages()).subscribe({
      next: (response) => {
        this.messages.update(msgs => [...msgs, { 
          role: 'assistant', 
          content: response.message 
        }]);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Chat error:', error);
        this.messages.update(msgs => [...msgs, { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please make sure the API is configured correctly.' 
        }]);
        this.isLoading.set(false);
      }
    });
  }
}
