import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
export function formatNumber(number: number, text: string) {
  return `${number} ${number > 1 ? text + "s" : text}`
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function getInitials(name: string): string {
  if (!name) return 'A';

  const nameParts = name.trim().split(' ');
  const initials = nameParts.map(part => part[0].toUpperCase()).join('');

  return initials;
}
