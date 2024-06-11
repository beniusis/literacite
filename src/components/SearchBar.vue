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
  <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input
    id="search-input"
    type="text"
    placeholder="Search..."
    class="w-full rounded-lg bg-background pe-16 pl-8 md:w-[200px] lg:w-[336px]"
    :model-value="props.searchValue"
    @update:model-value="emit('update:searchValue', $event.toString())"
  />
</template>
