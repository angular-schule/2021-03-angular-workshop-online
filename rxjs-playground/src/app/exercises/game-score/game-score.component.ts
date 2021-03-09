import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, of } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den aktuellen und den finalen Punktestand zu ermitteln...
     */

    /******************************/

    this.score$.pipe(
      scan((acc, item) => acc + item, 0) // acc: letztes Zwischenergebnis; item: neues Element aus der Quelle
    ).subscribe(score => this.currentScore = score);

    this.score$.pipe(
      reduce((acc, item) => acc + item, 0)
    ).subscribe(score => this.finalScore = score);
    
    /******************************/

    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });

    //////////////////////////

    of(
      'SETLANGANGULAR',
      'SETNAMEFERDINAND',
      'SETCITYLEIPZIG',
      'SETNAMEFM'
    ).pipe(
      scan((state, message: string) => {
        switch (message) {
          case 'SETLANGANGULAR': return { ...state, lang: 'Angular', year: 2016 };
          case 'SETNAMEFERDINAND': return { ...state, name: 'Ferdinand' };
          case 'SETNAMEFM': return { ...state, name: 'FM' };
          case 'SETCITYLEIPZIG': return { ...state, city: 'Leipzig' };
          case 'SETCITYMUNICH': return { ...state, city: 'München' };
          default: return state;
        }
      }, { foo: 'bar', lang: 'React' })
    ).subscribe(e => console.log(e));


  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
