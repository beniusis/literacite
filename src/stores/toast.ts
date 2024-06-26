import type { Toast } from '@/interfaces';
import type { ToastStatus } from '@/types';
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
