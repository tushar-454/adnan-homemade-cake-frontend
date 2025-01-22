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
