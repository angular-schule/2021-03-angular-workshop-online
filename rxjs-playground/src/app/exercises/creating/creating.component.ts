import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Finnische Notation
    const myObs$ = timer(2000, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0),
      startWith(1000, 2000)
    );
    
    
    myObs$.subscribe({
      next: value => this.log(value),
      complete: () => this.log('Complete'),
    });
    
    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
