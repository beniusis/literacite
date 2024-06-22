import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const pagesPerDay = ref<number>(Number(localStorage.getItem('pages-per-day')) || 1);

  const setPagesPerDay = (value: number) => {
    pagesPerDay.value = value;
    localStorage.setItem('pages-per-day', value.toString());
  };

  return { pagesPerDay, setPagesPerDay };
});
