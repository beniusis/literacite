<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EmptyBooks from './EmptyBooks.vue';
import VBook from './VBook.vue';
import type { BookProps } from '@/lib/types';

const props = defineProps<{
  books: BookProps[];
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Books</CardTitle>
      <CardDescription
        >View your books, update their status or search for the new ones.</CardDescription
      >
    </CardHeader>

    <CardContent>
      <EmptyBooks v-if="books.length === 0" />

      <div v-else class="grid grid-cols-auto gap-x-8 gap-y-4">
        <VBook v-for="book in props.books" :key="book.id" :book="book" />
      </div>
    </CardContent>
  </Card>
</template>
