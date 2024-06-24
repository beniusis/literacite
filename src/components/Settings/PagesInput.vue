<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldInput } from '@/components/ui/number-field';
import { Label } from '@/components/ui/label';
</script>

<template>
  <NumberField id="pages" :min="1" class="gap-2">
    <Label for="pages" class="sr-only">Pages to read in a day</Label>
    <NumberFieldContent>
      <NumberFieldInput class="text-7xl" data-testid="pages-input" />
    </NumberFieldContent>
  </NumberField>
</template>
