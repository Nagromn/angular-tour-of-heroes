import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from "./hero";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [
    HeroDetailComponent,
    NgForOf,
    RouterLink
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
