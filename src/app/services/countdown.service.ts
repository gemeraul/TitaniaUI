import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountdownService {

  constructor() { }

  endDate: Date = new Date(2018, 9, 9);

  createCountdownService(): Observable<number> {

    return new Observable(
      observer => {
        setInterval(() =>
          observer.next(this.endDate.getTime() - new Date().getTime())
          , 1000);
      }
    );
  }

}