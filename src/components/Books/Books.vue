<script setup lang="ts">
import type { Book } from '@/lib/types';
import BookBlock from './BookBlock.vue';

const props = defineProps<{
  data: Book[];
}>();
</script>

<template>
  <div class="grid grid-cols-auto gap-x-8 gap-y-4">
    <BookBlock v-for="book in props.data" :key="book.id" :data="book" />
  </div>
</template>
