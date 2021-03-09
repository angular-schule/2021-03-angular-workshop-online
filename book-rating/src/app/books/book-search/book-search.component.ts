import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.searchControl.valueChanges
      .subscribe(e => console.log(e));
  }

}
