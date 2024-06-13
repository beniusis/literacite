import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ID_LENGTH } from './data';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createRandomStringID = () => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  let randomStringID = '';

  for (let i = 0; i < ID_LENGTH; i++) {
    randomStringID += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }

  return randomStringID;
};
