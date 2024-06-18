<script setup lang="ts">
import type { BookProps } from '@/lib/types';
import BookModal from './BookModal.vue';
import { ref } from 'vue';

const props = defineProps<{
  book: BookProps;
}>();

const isModalOpen = ref(false);
</script>

<template>
  <div
    v-if="props.book.volumeInfo.imageLinks && props.book.volumeInfo.authors"
    class="group row-span-2 grid cursor-pointer grid-rows-subgrid"
    :title="props.book.volumeInfo.title"
    @click="isModalOpen = true"
  >
    <div class="relative max-h-60 max-w-40">
      <img
        class="h-full w-full rounded-md object-cover group-hover:opacity-75"
        :src="props.book.volumeInfo.imageLinks.thumbnail"
        :alt="`Cover of ${props.book.volumeInfo.title}`"
        loading="lazy"
      />
    </div>

    <div class="text-balance group-hover:opacity-75">
      <h2 class="max-w-40 truncate font-headland text-sm text-primary">
        {{ props.book.volumeInfo.title }}
      </h2>
      <p class="text-xs text-muted-foreground">{{ props.book.volumeInfo.authors.join(', ') }}</p>
    </div>

    <BookModal :is-open="isModalOpen" :book="book" @close="isModalOpen = false" />
  </div>
</template>
