<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-vue-next';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm" class="h-7 gap-1" data-testid="filter-btn">
        <ListFilter class="size-3.5" />
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup
        :model-value="props.modelValue"
        @update:model-value="emit('update:modelValue', $event.toString())"
      >
        <DropdownMenuRadioItem value="all" data-testid="filter-by-all">All</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="read">Read</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="reading">Reading</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="to read" data-testid="filter-by-to-read"
          >To Read</DropdownMenuRadioItem
        >
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
