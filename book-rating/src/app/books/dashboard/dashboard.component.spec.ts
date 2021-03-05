import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock: Partial<BookRatingService>;

  beforeEach(async () => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 3
    };

    ratingMock = {
      rateUp(book: Book) { return book; }
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Unit Test
      providers: [
        // Stelle BRS zur Verfügung. Wenn jemand BRS anfordert, liefere
        // Inhalt der Variable "ratingMock" aus
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp()', () => {
    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough(); // Aufruf an das Objekt "rs" durchleiten, sonst blockiert der Spy den Aufruf

    // Act
    component.rateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
