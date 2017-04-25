import { Component } from '@angular/core';
import {Joke} from './joke';

@Component({
  selector: 'app-root',
  template:`
<joke-list>
  <joke [joke]="joke">
    <span class="setup">{{joke.setup}}</span>
    <h1 class="punchline">{{joke.punchline}}</h1>
  </joke>
</joke-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: Joke = new Joke("A kid threw a lump of cheddar at me",
               "I thought 'That is not very mature'.");
}