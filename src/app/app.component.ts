import { Component } from '@angular/core';
import { AppModule } from "./app.module";
import {MessagesComponent} from "./messages/messages.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AppModule,
    MessagesComponent,
    HeroesComponent,
    RouterOutlet,
    RouterLink
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
