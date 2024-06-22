<script setup lang="ts">
import { ref } from 'vue';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-vue-next';
import PagesInput from './PagesInput.vue';
import { useSettingsStore } from '@/stores';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const { pagesPerDay } = storeToRefs(settingsStore);
const { setPagesPerDay } = settingsStore;

const numOfPages = ref(pagesPerDay.value);
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button size="sm" class="h-7 gap-1">
        <Settings class="h-3.5 w-3.5" />
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Settings</span>
      </Button>
    </DialogTrigger>
    <DialogContent class="gap-8">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>Settings to manage your reading habit tracking.</DialogDescription>
      </DialogHeader>

      <div class="flex flex-col items-center justify-center sm:items-start">
        <PagesInput v-model="numOfPages" />
      </div>

      <DialogFooter class="gap-2">
        <DialogClose as-child>
          <Button @click="setPagesPerDay(numOfPages)" :disabled="numOfPages === pagesPerDay"
            >Save</Button
          >
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
