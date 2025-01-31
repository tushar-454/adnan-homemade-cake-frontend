import { TCart } from '@/components/cart/cart';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setDataSessionStorage(key: string, value: unknown) {
  const isExist = sessionStorage.getItem(key);
  if (isExist) {
    const parsed = JSON.parse(isExist);
    const newValue = [...parsed, value];
    sessionStorage.setItem(key, JSON.stringify(newValue));
    return;
  }
  sessionStorage.setItem(key, JSON.stringify([value]));
}

export function getDataSessionStorage(key: string) {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function removeDataSessionStorage(key: string, id: string) {
  const data = sessionStorage.getItem(key);
  if (data) {
    const parsed = JSON.parse(data);
    const newValue = parsed.filter((item: TCart) => item._id !== id);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  }
}

export function updateDataSessionStorage(key: string, id: string, value: TCart) {
  const data = sessionStorage.getItem(key);
  if (data) {
    const parsed = JSON.parse(data);
    const newValue = parsed.map((item: TCart) => {
      if (item._id === id) {
        return value;
      }
      return item;
    });
    sessionStorage.setItem(key, JSON.stringify(newValue));
  }
}

export function addLocalStorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) as string);
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export const clearAllCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const [name] = cookie.split('=');
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  });
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'P.M.' : 'A.M.';
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${day}, ${month} ${year} at ${hours}:${minutes} ${ampm}`;
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    return Promise.resolve();
  }
}
