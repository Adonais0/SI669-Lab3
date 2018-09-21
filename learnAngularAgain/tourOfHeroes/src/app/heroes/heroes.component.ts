import { Component, OnInit} from '@angular/core';
import { HeroService } from '../heroes.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  buttonText = 'Order By Id';
  orderById = false;

  constructor (private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onClick(): void {
    this.orderById = !this.orderById;

    if (this.orderById) {
      this.buttonText = 'Order By Name';
      this.heroService.sortById();
    } else {
      this.buttonText = 'Order By Id';
      this.heroService.sortByName();
    }
    this.getHeroes();
  }
}
