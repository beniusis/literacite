<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import EmptyPlaceholder from './EmptyPlaceholder.vue';
import type { Book } from '@/lib/types';
import type { ComputedRef } from 'vue';

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
      <div
        v-for="(book, index) in books.value"
        class="row-span-2 grid cursor-pointer grid-rows-subgrid"
        :key="index"
        :title="book.volumeInfo.title"
      >
        <div class="max-h-60 max-w-40">
          <img
            class="h-full w-full rounded-md object-cover"
            :src="book.volumeInfo.imageLinks.thumbnail"
            :alt="`Cover of ${book.volumeInfo.title}`"
          />
        </div>

        <div class="text-balance">
          <h2 class="font-headland text-sm text-primary">{{ book.volumeInfo.title }}</h2>
          <p class="text-xs text-muted-foreground">{{ book.volumeInfo.authors.join(', ') }}</p>
        </div>
      </div>
    </div>
  </TabsContent>
</template>
