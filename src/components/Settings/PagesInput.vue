<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldInput } from '@/components/ui/number-field';
import { Label } from '@/components/ui/label';
</script>

<template>
  <NumberField id="pages" :min="1" class="gap-2">
    <Label for="pages" class="sr-only">Pages to read in a day</Label>
    <NumberFieldContent>
      <NumberFieldInput
        class="h-fit border-none text-7xl font-bold tracking-tighter shadow-none outline-none focus-visible:ring-0"
      />
    </NumberFieldContent>
  </NumberField>
</template>
