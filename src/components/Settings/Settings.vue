<script setup lang="ts">
import { ref } from 'vue';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, Settings } from 'lucide-vue-next';
import PagesInput from './PagesInput.vue';
import { useSettingsStore } from '@/stores';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const { pagesPerDay } = storeToRefs(settingsStore);
const { setPagesPerDay } = settingsStore;

const numOfPages = ref(pagesPerDay.value);
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button size="sm" class="h-7 gap-1">
        <Settings class="h-3.5 w-3.5" />
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Settings</span>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Your reading habit settings.</DrawerDescription>
        </DrawerHeader>
        <div class="p-4 pt-0">
          <div class="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              class="h-8 w-8 shrink-0 rounded-full"
              :disabled="numOfPages === 1"
              @click="numOfPages -= 1"
            >
              <MinusIcon class="h-4 w-4" />
              <span class="sr-only">Decrease</span>
            </Button>
            <div class="flex-1 text-center">
              <PagesInput v-model="numOfPages" />
              <div class="text-[0.7rem] uppercase text-muted-foreground">Pages/day</div>
            </div>
            <Button
              variant="outline"
              size="icon"
              class="h-8 w-8 shrink-0 rounded-full"
              @click="numOfPages += 1"
            >
              <PlusIcon class="h-4 w-4" />
              <span class="sr-only">Increase</span>
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose as-child>
            <Button @click="setPagesPerDay(numOfPages)">Save</Button>
          </DrawerClose>
          <DrawerClose as-child>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
