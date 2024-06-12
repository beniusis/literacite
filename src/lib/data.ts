import type { Tab } from './types';

export const TABS: Tab[] = [
  { value: 'all', title: 'All', subtitle: 'All of your books' },
  { value: 'read', title: 'Read', subtitle: 'Books you have read already' },
  { value: 'reading', title: 'Reading', subtitle: 'Books you are currently reading' },
  { value: 'to read', title: 'To Read', subtitle: 'Books you have marked to read for later' },
  { value: 'search', title: 'Search', subtitle: 'Books found using Google Books search' }
];
