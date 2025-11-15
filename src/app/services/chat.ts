import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Chat {
  private apiUrl = '/api/chat';
  
  constructor(private http: HttpClient) {}
  
  sendMessage(messages: ChatMessage[]): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, { messages });
  }
}
