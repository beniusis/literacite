import type { BookStatus } from '../types';

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
