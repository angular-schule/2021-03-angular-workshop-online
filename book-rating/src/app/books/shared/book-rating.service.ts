import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    book.rating++; // keine gute Idee!
    return book;
  }

  rateDown(book: Book): Book {
    return null; // TODO
  }
}
