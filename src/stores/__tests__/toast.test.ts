import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useToastStore } from '../toast';

describe('Books store tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders the success toast with the correct message', () => {
    const toastStore = useToastStore();
    toastStore.success('Success message');
    expect(toastStore.toasts[0].status).toBe('success');
    expect(toastStore.toasts[0].message).toBe('Success message');
  });

  it('renders the error toast with the correct message', () => {
    const toastStore = useToastStore();
    toastStore.error('Error message');
    expect(toastStore.toasts[0].status).toBe('error');
    expect(toastStore.toasts[0].message).toBe('Error message');
  });

  it('renders the info toast with the correct message', () => {
    const toastStore = useToastStore();
    toastStore.info('Info message');
    expect(toastStore.toasts[0].status).toBe('info');
    expect(toastStore.toasts[0].message).toBe('Info message');
  });

  it('render the warning toast with the correct message', () => {
    const toastStore = useToastStore();
    toastStore.warning('Warning message');
    expect(toastStore.toasts[0].status).toBe('warning');
    expect(toastStore.toasts[0].message).toBe('Warning message');
  });

  it('removes a toast from the list after 3 seconds', async () => {
    const toastStore = useToastStore();
    toastStore.success('Success message');

    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(toastStore.toasts).toStrictEqual([]);
  });
});
