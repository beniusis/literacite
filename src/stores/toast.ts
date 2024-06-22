import type { Toast, ToastStatus } from '@/lib/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const DEFAULT_TIMEOUT = 3000;

const createToast = (message: string, status: ToastStatus): Toast => {
  return {
    message,
    status,
    id: Math.random() * 1000
  };
};

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([]);

  const updateState = (message: string, status: ToastStatus) => {
    const toast = createToast(message, status);

    toasts.value.push(toast);
    console.log(toasts.value);

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: Toast) => t.id !== toast.id);
    }, DEFAULT_TIMEOUT);
  };

  const success = (message: string) => updateState(message, 'success');
  const error = (message: string) => updateState(message, 'error');
  const info = (message: string) => updateState(message, 'info');
  const warning = (message: string) => updateState(message, 'warning');

  return { toasts, success, error, info, warning };
});
