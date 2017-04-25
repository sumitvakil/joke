import { Component, NgModule, Input, Output, EventEmitter, OnInit, ViewChild, ViewChildren,
         QueryList, AfterViewInit, ElementRef, ContentChild, ContentChildren } from '@angular/core';
import {Joke} from '../joke';
import {JokeComponent} from '../joke/joke.component';


@Component({
  selector: 'joke-list',
  template: `
  <h4 #header>View Jokes</h4>
  <joke *ngFor="let j of jokes" [joke]="j">
    <span class="setup">{{j.setup}} ?</span>
    <h1 class="punchline">{{j.punchline}}</h1>
  </joke>

  <h4>Content Jokes</h4>
  <ng-content></ng-content>
  `
})
export class JokeListComponent implements OnInit, AfterViewInit {
  jokes: Joke[];
  
  constructor () {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror",
               "Hello-ME (Halloumi)."),
      new Joke("What kind of cheese do you use to disguise a small horse",
               "Mask-a-pony (Mascarpone).")
    ];
  }
  
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild : JokeComponent;

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngAfterViewInit () {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
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