import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    book = {
      isbn: '',
      title: '',
      rating: 3,
      description: '',
      price: 1
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should rate up by one', () => {
    book.rating = 3;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4); // immer auf konkrete Werte prüfen. Nicht gut: toBe(book.rating + 1)
  });

  it('it should rate down by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('it should not rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(5);
  });
  
  it('it should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
  
  it('it should return null if input is not defined for rateUp', () => {
    const returnValue = service.rateUp(null);
    expect(returnValue).toBeNull();
  });
});
