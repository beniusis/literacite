<script setup lang="ts">
import { useToastStore } from '@/stores';
import { storeToRefs } from 'pinia';
import Toast from './Toast.vue';

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
</script>

<template>
  <ul
    v-if="toasts.length > 0"
    class="fixed bottom-2 left-2 z-50 flex w-full flex-col gap-2 sm:bottom-auto sm:left-auto sm:right-2 sm:top-2 sm:w-fit sm:items-end"
  >
    <Toast
      v-for="toast in toasts"
      :status="toast.status"
      :message="toast.message"
      :key="toast.id"
    />
  </ul>
</template>
