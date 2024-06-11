<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import EmptyPlaceholder from './EmptyPlaceholder.vue';
import type { Book } from '@/lib/types';
import type { ComputedRef } from 'vue';
import BookBlock from './BookBlock.vue';

const props = defineProps<{
  value: string;
  title: string;
  subtitle: string;
  books: ComputedRef<Book[]>;
}>();
</script>

<template>
  <TabsContent :value="props.value">
    <div class="flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-primary">{{ props.title }}</h2>
        <p class="text-sm text-muted-foreground">{{ props.subtitle }}</p>
      </div>
    </div>
    <Separator class="my-4 w-full" />
    <EmptyPlaceholder v-if="props.books.value.length === 0" />
    <div v-else class="grid grid-cols-auto gap-x-8 gap-y-4">
      <BookBlock v-for="(book, index) in books.value" :key="index" :data="book" />
    </div>
  </TabsContent>
</template>
