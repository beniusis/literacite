<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { useDebounceFn } from '@vueuse/core';
import { Search } from 'lucide-vue-next';

const props = defineProps<{
  searchValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:searchValue', value: string): void;
  (e: 'search'): void;
}>();

const emitSearch = useDebounceFn(() => {
  emit('search');
}, 500);
</script>

<template>
  <div class="relative">
    <Search class="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      id="search-input"
      type="search"
      placeholder="Search for a book..."
      class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
      :model-value="props.searchValue"
      @update:model-value="emit('update:searchValue', $event.toString())"
      @input="emitSearch"
    />
  </div>
</template>
