<script setup lang="ts">
import type { ToastStatus } from '@/lib/types';
import { Ban, CircleCheck, Info, TriangleAlert } from 'lucide-vue-next';

const props = defineProps<{
  status: ToastStatus;
  message: string;
}>();
</script>

<template>
  <div
    :class="[
      {
        'bg-green-500': props.status === 'success',
        'bg-red-500': props.status === 'error',
        'bg-yellow-500': props.status === 'warning',
        'bg-blue-500': props.status === 'info'
      },
      'flex w-fit items-center justify-center gap-2 rounded-md p-2 text-primary-foreground'
    ]"
  >
    <CircleCheck v-if="props.status === 'success'" />
    <Ban v-if="props.status === 'error'" />
    <Info v-if="props.status === 'info'" />
    <TriangleAlert v-if="props.status === 'warning'" />
    <span class="text-sm font-semibold">{{ props.message }}</span>
  </div>
</template>
