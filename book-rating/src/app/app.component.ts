import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {
    function producer(o) {
      setTimeout(() => {
        o.next(1);
      }, 2000);

      setTimeout(() => {
        o.complete();
      }, 4000);

      o.next(2);
      o.next(3);
    }


    const observer = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('C')
    };

    // producer(observer);

    const myObs$ = new Observable(producer);
    myObs$.subscribe(observer);
  
  }
}
