import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Book } from '@/lib/types';

export const useBooksStore = defineStore('books', () => {
  const books = ref<Book[]>(localStorage.books ? JSON.parse(localStorage.books) : []);

  const allBooks = computed<Book[]>(() => {
    return books.value;
  });

  const readBooks = computed<Book[]>(() => {
    return books.value.filter((book: Book) => book.status === 'READ');
  });

  const readingBooks = computed<Book[]>(() => {
    return books.value.filter((book: Book) => book.status === 'READING');
  });

  const toReadBooks = computed<Book[]>(() => {
    return books.value.filter((book: Book) => book.status === 'TO READ');
  });

  const addBooks = (newBooks: Book[]) => {
    books.value = [...books.value, ...newBooks];
    localStorage.books = JSON.stringify(books.value);
  };

  const updateBookStatus = (book: Book, status: 'READ' | 'READING' | 'TO READ') => {
    const bookIndex = books.value.findIndex((b: Book) => b === book);
    books.value[bookIndex].status = status;
    localStorage.books = JSON.stringify(books.value);
  };

  return { allBooks, readBooks, readingBooks, toReadBooks, addBooks, updateBookStatus };
});
