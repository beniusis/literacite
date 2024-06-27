<script setup lang="ts">
import { NumberFieldInput } from 'radix-vue';
import { cn } from '@/utils';
</script>

<template>
  <NumberFieldInput
    :class="
      cn(
        'flex h-fit w-full rounded-md bg-transparent px-10 py-1 text-center font-bold transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      )
    "
  />
</template>
