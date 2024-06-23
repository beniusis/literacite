import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createRandomStringID = () => {
  const ID_LENGTH = 12;
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  let randomStringID = '';

  for (let i = 0; i < ID_LENGTH; i++) {
    randomStringID += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }

  return randomStringID;
};

export const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10);
};
