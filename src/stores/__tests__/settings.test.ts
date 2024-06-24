import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useSettingsStore } from '../settings';

describe('Books store tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('gets the default number of pages per day to read', () => {
    const settingsStore = useSettingsStore();
    expect(settingsStore.pagesPerDay).toBe(25);
  });

  it('gets the number of pages per day to read from local storage', () => {
    localStorage.setItem('pages-per-day', '5');

    const settingsStore = useSettingsStore();
    expect(settingsStore.pagesPerDay).toBe(5);
  });

  it('correctly sets the number of pages per day to read', () => {
    const settingsStore = useSettingsStore();
    settingsStore.setPagesPerDay(15);
    expect(settingsStore.pagesPerDay).toBe(15);
  });
});
