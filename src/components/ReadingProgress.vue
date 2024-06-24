<script setup lang="ts">
import { Progress } from '@/components/ui/progress';
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  pagesRead: number;
  pagesTotal: number;
}>();

const progress = computed(() => {
  return (props.pagesRead / props.pagesTotal) * 100;
});
</script>

<template>
  <div class="flex max-w-fit flex-col">
    <div class="flex items-center justify-between gap-8 text-primary">
      <h2 class="text-sm font-medium">{{ props.title }}</h2>
      <span class="text-sm" data-testid="progress-result"
        >{{ props.pagesRead }} / {{ props.pagesTotal }}</span
      >
    </div>
    <Progress v-model="progress" class="mt-1" />
  </div>
</template>
