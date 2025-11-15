import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface PasswordStrength {
  score: number;
  level: string;
  color: string;
  feedback: string[];
}

@Component({
  selector: 'app-strong-passwords',
  imports: [FormsModule, CommonModule],
  templateUrl: './strong-passwords.html',
  styleUrl: './strong-passwords.css',
})
export class StrongPasswords {
  password: string = '';
  showPassword: boolean = false;

  get passwordStrength(): PasswordStrength {
    return this.calculatePasswordStrength(this.password);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  private calculatePasswordStrength(password: string): PasswordStrength {
    if (!password) {
      return {
        score: 0,
        level: 'Digite uma senha',
        color: '#666',
        feedback: []
      };
    }

    let score = 0;
    const feedback: string[] = [];

    // Verificar comprimento
    if (password.length >= 8) score += 1;
    else feedback.push('Use pelo menos 8 caracteres');

    if (password.length >= 12) score += 1;
    else if (password.length >= 8) feedback.push('Considere usar 12+ caracteres para maior segurança');

    // Verificar letras minúsculas
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Adicione letras minúsculas (a-z)');

    // Verificar letras maiúsculas
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Adicione letras maiúsculas (A-Z)');

    // Verificar números
    if (/[0-9]/.test(password)) score += 1;
    else feedback.push('Adicione números (0-9)');

    // Verificar símbolos especiais
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else feedback.push('Adicione símbolos especiais (!@#$%^&*)');

    // Verificar padrões comuns
    const commonPatterns = [
      /123456/,
      /password/i,
      /qwerty/i,
      /abc/i,
      /(\w)\1{2,}/  // caracteres repetidos
    ];

    let hasCommonPattern = false;
    commonPatterns.forEach(pattern => {
      if (pattern.test(password)) {
        hasCommonPattern = true;
        feedback.push('Evite padrões comuns (123456, password, etc.)');
      }
    });

    if (hasCommonPattern) score = Math.max(0, score - 2);

    // Determinar nível e cor
    let level: string;
    let color: string;

    if (score <= 2) {
      level = 'Fraca';
      color = '#e74c3c';
    } else if (score <= 4) {
      level = 'Média';
      color = '#f39c12';
    } else if (score <= 5) {
      level = 'Forte';
      color = '#27ae60';
    } else {
      level = 'Muito Forte';
      color = '#2ecc71';
    }

    return { score, level, color, feedback };
  }
}
