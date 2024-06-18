import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { BookProps } from '@/lib/types';

export const useBooksStore = defineStore('books', () => {
  const books = ref<BookProps[]>(localStorage.books ? JSON.parse(localStorage.books) : []);

  const allBooks = computed<BookProps[]>(() => {
    return books.value;
  });

  const readBooks = computed<BookProps[]>(() => {
    return books.value.filter((book: BookProps) => book.status === 'READ');
  });

  const readingBooks = computed<BookProps[]>(() => {
    return books.value.filter((book: BookProps) => book.status === 'READING');
  });

  const toReadBooks = computed<BookProps[]>(() => {
    return books.value.filter((book: BookProps) => book.status === 'TO READ');
  });

  const addBooks = (newBooks: BookProps[]) => {
    books.value = [...books.value, ...newBooks];
    localStorage.books = JSON.stringify(books.value);
  };

  const addBook = (book: BookProps) => {
    if (books.value.find((b: BookProps) => b.id === book.id)) return;
    books.value.push(book);
    localStorage.books = JSON.stringify(books.value);
  };

  const updateBookStatus = (book: BookProps, status: 'READ' | 'READING' | 'TO READ') => {
    const bookIndex = books.value.findIndex((b: BookProps) => b === book);
    books.value[bookIndex].status = status;
    localStorage.books = JSON.stringify(books.value);
  };

  const isAlreadyAdded = (book: BookProps) => {
    return books.value.find((b: BookProps) => b.id === book.id);
  };

  return {
    allBooks,
    readBooks,
    readingBooks,
    toReadBooks,
    addBooks,
    addBook,
    updateBookStatus,
    isAlreadyAdded
  };
});
