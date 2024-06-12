<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import EmptyPlaceholder from './EmptyPlaceholder.vue';
import { Books } from '@/components';
import type { Book } from '@/lib/types';

const props = defineProps<{
  value: string;
  title: string;
  subtitle: string;
  books: Book[];
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
    <EmptyPlaceholder v-if="props.books.length === 0" />
    <Books v-else :data="props.books" />
  </TabsContent>
</template>
