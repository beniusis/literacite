<script setup lang="ts">
import type { Book } from '@/lib/types';

const props = defineProps<{
  data: Book;
}>();
</script>

<template>
  <div
    v-if="props.data.volumeInfo.imageLinks && props.data.volumeInfo.authors"
    class="row-span-2 grid cursor-pointer grid-rows-subgrid"
  >
    <div class="max-h-60 max-w-40">
      <img
        class="h-full w-full rounded-md object-cover"
        :src="props.data.volumeInfo.imageLinks.thumbnail"
        :alt="`Cover of ${props.data.volumeInfo.title}`"
        loading="lazy"
      />
    </div>

    <div class="text-balance">
      <h2
        class="max-w-40 truncate font-headland text-sm text-primary"
        :title="props.data.volumeInfo.title"
      >
        {{ props.data.volumeInfo.title }}
      </h2>
      <p class="text-xs text-muted-foreground">{{ props.data.volumeInfo.authors.join(', ') }}</p>
    </div>
  </div>
</template>
