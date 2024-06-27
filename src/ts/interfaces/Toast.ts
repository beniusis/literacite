import type { ToastStatus } from '../types';

export interface Toast {
  message: string;
  status: ToastStatus;
  id: number;
}
