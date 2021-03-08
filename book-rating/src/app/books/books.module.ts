import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchComponent } from './book-search/book-search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookCreateComponent,
    BookFormComponent,
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
