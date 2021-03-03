import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  url = 'https://angular.schule';

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        rating: 5,
        price: 36.9
      },
      {
        isbn: '456',
        title: 'React',
        description: 'Das andere Framework',
        rating: 3,
        price: 32.9
      }
    ];
  }

}