import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useToastStore } from './toast';
import type { BookProps } from '@/interfaces';
import type { BookStatus } from '@/types';

export const useBooksStore = defineStore('books', () => {
  const { success, error, info } = useToastStore();

  const books = ref<BookProps[]>(localStorage.books ? JSON.parse(localStorage.books) : []);

  const allBooks = computed<BookProps[]>(() => {
    return books.value;
  });

  const readBooks = computed<BookProps[]>(() => {
    return books.value.filter((book) => book.status === 'READ');
  });

  const readingBooks = computed<BookProps[]>(() => {
    return books.value.filter((book) => book.status === 'READING');
  });

  const toReadBooks = computed<BookProps[]>(() => {
    return books.value.filter((book) => book.status === 'TO READ');
  });

  const addBook = (book: BookProps) => {
    if (books.value.find((b) => b.id === book.id)) return;
    books.value.push(book);
    localStorage.books = JSON.stringify(books.value);
  };

  const updateBookStatus = (book: BookProps, status: BookStatus | undefined) => {
    if (book.status === status) {
      return info('Nothing to update!');
    }

    try {
      const bookIndex = books.value.findIndex((b) => b === book);
      books.value[bookIndex].status = status;
      localStorage.books = JSON.stringify(books.value);
      success(`${book.volumeInfo.title} status changed to ${status}!`);
    } catch {
      error('Something went wrong!');
    }
  };

  const isAlreadyAdded = (book: BookProps) => {
    return books.value.find((b) => b.id === book.id);
  };

  return {
    allBooks,
    readBooks,
    readingBooks,
    toReadBooks,
    addBook,
    updateBookStatus,
    isAlreadyAdded
  };
});
