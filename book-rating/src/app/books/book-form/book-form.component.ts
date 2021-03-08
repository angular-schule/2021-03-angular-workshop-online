import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  myText: string = 'Hallo';
  myObj = {
    title: ''
  }

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    this.submitForm();
  }

  submitForm() {
    // ...
    this.submitBook.emit()
  }

}
