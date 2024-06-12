<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';

const props = defineProps<{
  searchValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:searchValue', value: string): void;
}>();
</script>

<template>
  <div class="relative">
    <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      id="search-input"
      type="text"
      placeholder="Enter a book title or author..."
      class="w-full rounded-lg bg-background pl-8"
      :model-value="props.searchValue"
      @update:model-value="emit('update:searchValue', $event.toString())"
    />
  </div>
</template>
