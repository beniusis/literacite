type BookStatus = 'READ' | 'READING' | 'TO READ';

export interface Book {
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
    language: string;
    canonicalVolumeLink?: string;
  };
  status?: BookStatus;
}

export type TabValue = 'all' | 'read' | 'reading' | 'to read';

export interface Tab {
  value: TabValue;
  title: string;
  subtitle: string;
}
