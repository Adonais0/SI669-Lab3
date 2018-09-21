import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  HEROES = HEROES;

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // return Observable of HEROES
  }

  sortById(): void {
    this.HEROES.sort((a, b) => a.id - b.id );
  }

  sortByName(): void {
    this.HEROES.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {return - 1; }
      if (x > y) {return 1; }
      return 0;
    });
  }
}
