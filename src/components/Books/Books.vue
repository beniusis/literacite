<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EmptyBooks from './EmptyBooks.vue';
import Book from './Book.vue';
import type { BookProps } from '@/interfaces';

const props = defineProps<{
  books: BookProps[];
}>();
</script>

<template>
  <Card class="max-w-fit">
    <CardHeader class="text-center sm:text-left">
      <CardTitle>Books</CardTitle>
      <CardDescription class="text-balance"
        >View your books, update their status or search for the new ones.</CardDescription
      >
    </CardHeader>

    <CardContent>
      <EmptyBooks v-if="books.length === 0" data-testid="empty-books" />

      <div v-else class="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
        <Book v-for="book in props.books" :key="book.id" :book="book" data-testid="book" />
      </div>
    </CardContent>
  </Card>
</template>
