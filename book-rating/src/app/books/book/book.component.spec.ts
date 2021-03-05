import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Buch belegen
    // Achtung: VOR detectChanges erledigen, sonst Fehler bei Change Detection
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 2
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();
    // alternativ: Button "klicken":
    // fixture.nativeElement.querySelector('button').click();

    // Assert
    expect(emittedBook).toBeTruthy(); // alternativ: expect(emittedBook).not.toBeUndefined() // not.toBeFalsy();
    expect(emittedBook).toBe(component.book);
  });
});
