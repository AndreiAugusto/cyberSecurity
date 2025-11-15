import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface RiskQuestion {
  id: string;
  question: string;
  answer: boolean | null;
}

interface RiskAssessment {
  score: number;
  level: string;
  color: string;
  description: string;
  recommendations: string[];
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  riskQuestions: RiskQuestion[] = [
    {
      id: 'samePassword',
      question: 'Usa a mesma senha em vários sites?',
      answer: null
    },
    {
      id: 'notepadPassword',
      question: 'Salva senhas no bloco de notas?',
      answer: null
    },
    {
      id: 'no2FA',
      question: 'Não usa autenticação de dois fatores (2FA)?',
      answer: null
    },
    {
      id: 'clickLinks',
      question: 'Clica em links sem verificar?',
      answer: null
    },
    {
      id: 'noBackup',
      question: 'Não faz backup dos seus dados?',
      answer: null
    }
  ];

  showResults = false;

  get riskAssessment(): RiskAssessment {
    return this.calculateRisk();
  }

  get allQuestionsAnswered(): boolean {
    return this.riskQuestions.every(q => q.answer !== null);
  }

  get answeredQuestionsCount(): number {
    return this.riskQuestions.filter(q => q.answer !== null).length;
  }

  get totalQuestionsCount(): number {
    return this.riskQuestions.length;
  }

  get progressPercentage(): number {
    return (this.answeredQuestionsCount / this.totalQuestionsCount) * 100;
  }

  onAnswerChange(): void {
    if (this.allQuestionsAnswered) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }

  resetAssessment(): void {
    this.riskQuestions.forEach(q => q.answer = null);
    this.showResults = false;
  }

  private calculateRisk(): RiskAssessment {
    const yesAnswers = this.riskQuestions.filter(q => q.answer === true).length;
    
    if (yesAnswers <= 1) {
      return {
        score: yesAnswers,
        level: 'Baixo Risco',
        color: '#27ae60',
        description: 'Parabéns! Você está seguindo boas práticas de segurança digital.',
        recommendations: [
          'Continue mantendo essas práticas',
          'Revise periodicamente suas configurações de segurança',
          'Mantenha-se atualizado sobre novas ameaças'
        ]
      };
    } else if (yesAnswers <= 3) {
      return {
        score: yesAnswers,
        level: 'Médio Risco',
        color: '#f39c12',
        description: 'Você tem alguns hábitos que podem comprometer sua segurança digital.',
        recommendations: [
          'Use um gerenciador de senhas confiável',
          'Ative autenticação de dois fatores onde possível',
          'Seja mais cauteloso ao clicar em links',
          'Estabeleça uma rotina regular de backups'
        ]
      };
    } else {
      return {
        score: yesAnswers,
        level: 'Alto Risco',
        color: '#e74c3c',
        description: 'Atenção! Seus hábitos digitais apresentam sérios riscos de segurança.',
        recommendations: [
          'URGENTE: Troque todas as suas senhas por senhas únicas',
          'Instale e use um gerenciador de senhas',
          'Ative 2FA em todas as contas importantes',
          'Nunca clique em links suspeitos',
          'Configure backups automáticos imediatamente',
          'Considere fazer um curso de segurança digital'
        ]
      };
    }
  }
}
