import { Component, OnInit } from '@angular/core';
import { fromEvent, timer } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    /**
     *  Schreibe die jeweils aktuelle Fensterbreite in das Property this.currentWidth
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (window.innerWidth)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden
     */

    /******************************/

    const windowWidth$ = fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      map(() => window.innerWidth),
      startWith(window.innerWidth),
    );    
    
    windowWidth$.subscribe(e => this.currentWidth = e);

    /******************************/
  }

}
