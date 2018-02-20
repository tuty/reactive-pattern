import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/models/test-lessons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  ngOnInit() {

    console.log('Top level component broadcasted all lessons');

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, [...testLessons]);
  }


  addLesson() {}

}
