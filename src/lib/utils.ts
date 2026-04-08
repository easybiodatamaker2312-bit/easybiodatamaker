import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function calculateAge(dateOfBirth: string): string {
  if (!dateOfBirth) return '';
  const today = new Date();
  const birth = new Date(dateOfBirth);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return `${age} Years`;
}

// Store biodata in sessionStorage
export function saveBiodata(data: Record<string, unknown>): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('biodataFormData', JSON.stringify(data));
  }
}

export function loadBiodata(): Record<string, unknown> | null {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('biodataFormData');
    return saved ? JSON.parse(saved) : null;
  }
  return null;
}

export function clearBiodata(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('biodataFormData');
  }
}
