<script setup lang="ts">
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field';
import { Label } from '@/components/ui/label';
</script>

<template>
  <NumberField id="pages" :min="1" class="gap-2">
    <Label for="pages" class="text-center sm:text-left">Pages to read in a day</Label>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
