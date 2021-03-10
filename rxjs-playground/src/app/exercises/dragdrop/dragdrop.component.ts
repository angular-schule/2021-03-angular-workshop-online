import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  targetPosition = [50, 50];
  @ViewChild('target', { static: true }) target;

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseDown$ = fromEvent<MouseEvent>(this.target.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    /**
     * Nutze RxJS, um die rote Box mit Drag-and-drop zu bewegen.
     *
     * Die Methode setTargetPosition(e: MouseEvent) ändert die Position der Box.
     * Nutze die Observables mouseMove$, mouseDown$ und mouseUp$ in einer geeigneten Kombination.
     * Beginne damit, dass die Box am Mauszeiger klebt.
     * Sorge dann dafür, dass dieser Prozess erst beim Klick (mouseDown$) beginnt.
     * Beende den Prozess, sobald mouseUp$ feuert.
     */

    /******************************/

    const move$ = mouseDown$.pipe(
      concatMap(() => mouseMove$.pipe(takeUntil(mouseUp$)))
    );

    move$.subscribe(e => this.setTargetPosition(e));
        
    // optional!
    // merge(move$, mouseDown$).subscribe(e => this.setTargetPosition(e));

    
    /******************************/
  }

  private setTargetPosition(event: MouseEvent) {
    const offset = 50;
    this.targetPosition = [
      event.pageX - offset,
      event.pageY - offset
    ];
  }

}
