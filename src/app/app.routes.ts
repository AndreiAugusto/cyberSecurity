import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'whatsapp-scams', loadComponent: () => import('./pages/whatsapp-scams/whatsapp-scams').then(m => m.WhatsappScams) },
  { path: 'malicious-links', loadComponent: () => import('./pages/malicious-links/malicious-links').then(m => m.MaliciousLinks) },
  { path: 'strong-passwords', loadComponent: () => import('./pages/strong-passwords/strong-passwords').then(m => m.StrongPasswords) },
  { path: 'backup-privacy', loadComponent: () => import('./pages/backup-privacy/backup-privacy').then(m => m.BackupPrivacy) }
];
