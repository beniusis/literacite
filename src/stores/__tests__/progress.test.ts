import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useProgressStore } from '../progress';
import { getCurrentDate } from '@/utils';

describe('Books store tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('gets the number of pages read today', () => {
    const currentDate = getCurrentDate();
    localStorage.setItem('stats', JSON.stringify({ [currentDate]: 10 }));

    const progressStore = useProgressStore();
    expect(progressStore.numOfPagesReadToday).toBe(10);
  });

  it('correctly sets the number of pages read today', () => {
    const progressStore = useProgressStore();
    progressStore.setNumOfPagesReadToday(25);
    expect(progressStore.numOfPagesReadToday).toBe(25);
  });
});
