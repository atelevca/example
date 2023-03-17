import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = [
    {
      id: 1,
      name: 'Denis',
    },
    {
      id: 2,
      name: 'Anastasia',
    },
    {
      id: 3,
      name: 'John',
    },
    {
      id: 4,
      name: 'James',
    },
    {
      id: 5,
      name: 'Anna',
    },
    {
      id: 6,
      name: 'Mark',
    },
  ];

  public getData() {
    return of(this.data);
  }
}
