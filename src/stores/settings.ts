import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToastStore } from './toast';

export const useSettingsStore = defineStore('settings', () => {
  const { success } = useToastStore();

  const pagesPerDay = ref<number>(Number(localStorage.getItem('pages-per-day')) || 1);

  const setPagesPerDay = (value: number) => {
    pagesPerDay.value = value;
    localStorage.setItem('pages-per-day', value.toString());
    success(`Pages per day set to ${value}!`);
  };

  return { pagesPerDay, setPagesPerDay };
});
