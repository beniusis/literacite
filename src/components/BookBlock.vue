<script setup lang="ts">
import type { Book } from '@/lib/types';

const props = defineProps<{
  data: Book;
}>();
</script>

<template>
  <div class="row-span-2 grid cursor-pointer grid-rows-subgrid">
    <div class="max-h-60 max-w-40">
      <img
        class="h-full w-full rounded-md object-cover"
        :src="props.data.volumeInfo.imageLinks.thumbnail"
        :alt="`Cover of ${props.data.volumeInfo.title}`"
      />
    </div>

    <div class="text-balance">
      <h2 class="font-headland text-sm text-primary">{{ props.data.volumeInfo.title }}</h2>
      <p class="text-xs text-muted-foreground">{{ props.data.volumeInfo.authors.join(', ') }}</p>
    </div>
  </div>
</template>
