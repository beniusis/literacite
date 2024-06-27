import { getCurrentDate } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToastStore } from './toast';
import type { Stats } from '@/interfaces';

const getTodayPages = () => {
  const today = getCurrentDate();

  try {
    const stats: Stats = JSON.parse(localStorage.getItem('stats') as string);

    if (stats[today]) {
      return Number(stats[today]);
    }

    return 0;
  } catch {
    return 0;
  }
};

const setTodayPages = (value: number) => {
  const today = getCurrentDate();
  const { success, error } = useToastStore();

  try {
    const stats: Stats = JSON.parse(localStorage.getItem('stats') as string) || {};
    stats[today] = value;
    localStorage.setItem('stats', JSON.stringify(stats));
    success(`Pages read today: ${stats[today]}`);
  } catch {
    error("Failed to update today's progress.");
  }
};

export const useProgressStore = defineStore('progress', () => {
  const numOfPagesReadToday = ref(getTodayPages());

  const setNumOfPagesReadToday = (value: number) => {
    numOfPagesReadToday.value = value;
    setTodayPages(value);
  };

  return { numOfPagesReadToday, setNumOfPagesReadToday };
});
