import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setDataLocalStorage(key: string, value: unknown) {
  const isExist = localStorage.getItem(key);
  if (isExist) {
    const parsed = JSON.parse(isExist);
    const newValue = [...parsed, value];
    localStorage.setItem(key, JSON.stringify(newValue));
    return;
  }
  localStorage.setItem(key, JSON.stringify([value]));
}

export function getDataLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}
