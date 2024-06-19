export type BookStatus = 'READ' | 'READING' | 'TO READ';

export interface BookProps {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description: string;
    pageCount: number;
    categories: string[];
    averageRating?: number;
    ratingsCount?: number;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail: string;
    };
    canonicalVolumeLink?: string;
  };
  status?: BookStatus;
}

export type ToastStatus = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  message: string;
  status: ToastStatus;
  id: number;
}
