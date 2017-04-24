import { Component,NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Joke} from '../joke';


@Component({
  selector: 'joke-list',
  template: `
  <joke *ngFor="let j of jokes" [joke]="j">
    <span class="setup">{{j.setup}} ?</span>
    <h1 class="punchline">{{j.punchline}}</h1>
  </joke>
  <button type="button" class="btn btn-success"
      (click)="addJoke()">
    Add Joke
  </button>
  <button type="button" class="btn btn-danger"
      (click)="deleteJoke()">
    Clear Jokes
  </button>
  `
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  
  constructor () {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror",
               "Hello-ME (Halloumi)."),
      new Joke("What kind of cheese do you use to disguise a small horse",
               "Mask-a-pony (Mascarpone)."),
      new Joke("A kid threw a lump of cheddar at me",
               "I thought 'That is not very mature'.")
    ];
  }
  
  addJoke(joke) {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }
  
  deleteJoke(){
    this.jokes= [];
  }

  ngOnInit() {
  }
}