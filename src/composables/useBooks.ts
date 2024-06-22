import { ref } from 'vue';
import type { BookProps } from '@/lib/types';

export const useBooks = async (query: string) => {
  const loading = ref(false);
  const error = ref(false);
  const books = ref<BookProps[]>([]);

  loading.value = true;
  error.value = false;

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=40&orderBy=relevance`
    );
    const data = await response.json();
    books.value = data.items ?? [];
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }

  return { loading, error, books };
};
