<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BookMarked } from 'lucide-vue-next';
import { ref } from 'vue';
import { useProgressStore } from '@/stores/progress';
import { storeToRefs } from 'pinia';

const progressStore = useProgressStore();
const { numOfPagesReadToday } = storeToRefs(progressStore);
const { setNumOfPagesReadToday } = progressStore;

const pagesRead = ref(numOfPagesReadToday.value === 0 ? 1 : numOfPagesReadToday.value);
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button size="sm" class="h-7 gap-1" variant="outline">
        <BookMarked class="h-3.5 w-3.5" />
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Mark Reading</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>How many pages did you read?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will help us track your reading progress.
        </SheetDescription>
      </SheetHeader>

      <div class="py-4">
        <NumberField
          id="pages-read"
          v-model="pagesRead"
          :min="numOfPagesReadToday === 0 ? 1 : numOfPagesReadToday"
        >
          <Label for="pages-read">Pages read</Label>
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput class="border border-input text-sm" />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>

      <SheetFooter>
        <SheetClose as-child>
          <Button
            @click="setNumOfPagesReadToday(pagesRead)"
            :disabled="pagesRead === numOfPagesReadToday"
            >Submit</Button
          >
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
