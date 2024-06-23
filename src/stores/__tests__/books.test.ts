import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useBooksStore } from '../books';

describe('Books store tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('matches the default value of an empty array', () => {
    const booksStore = useBooksStore();
    expect(booksStore.allBooks).toStrictEqual([]);
  });

  it('adds a book to the store', () => {
    const booksStore = useBooksStore();
    const book = {
      id: 'wrOQLV6xB-wC',
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ['J.K. Rowling'],
        description:
          'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; ...',
        pageCount: 311,
        categories: ['Juvenile Fiction'],
        averageRating: 4.5,
        ratingsCount: 315,
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        }
      }
    };
    booksStore.addBook(book);
    expect(booksStore.allBooks).toStrictEqual([book]);
  });
});
