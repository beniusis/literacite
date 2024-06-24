import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToastStore } from './toast';

const DEFAULT_PAGES_PER_DAY = 25;

export const useSettingsStore = defineStore('settings', () => {
  const { success } = useToastStore();

  const pagesPerDay = ref<number>(
    Number(localStorage.getItem('pages-per-day')) || DEFAULT_PAGES_PER_DAY
  );

  const setPagesPerDay = (value: number) => {
    pagesPerDay.value = value;
    localStorage.setItem('pages-per-day', value.toString());
    success(`Pages per day to read set to ${value}!`);
  };

  return { pagesPerDay, setPagesPerDay };
});
