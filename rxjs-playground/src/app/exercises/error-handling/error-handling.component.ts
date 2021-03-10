import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, timer } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      // retry(5)
      catchError(err => {
        console.log('FEHLER:', err);
        // return throwError('Böser Fehler'); // Fehler weiterwerfen
        // return of('Nichts', 'passiert'); // Fehler umwandeln
        return EMPTY; // Fehler verschlucken
      })
    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
