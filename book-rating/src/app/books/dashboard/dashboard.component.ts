import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectAllBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  url = 'https://angular.schule';

  constructor(private rs: BookRatingService, private bs: BookStoreService, private store: Store) {}

  ngOnInit(): void {
    // this.bs.getAll().subscribe(books => this.books = books);
    this.store.dispatch(loadBooks());

    // TODO: Loading (Selektor benutzen)
    // TODO: AsyncPipe verwenden
    this.store.pipe(select(selectAllBooks))
      .subscribe(books => this.books = books);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map(book => book.isbn === ratedBook.isbn ? ratedBook : book); 
  }

  rateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

}