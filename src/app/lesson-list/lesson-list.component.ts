import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/models/lesson';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list component is registered as observer .. ');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('lesssons list component receive lessons');
    this.lessons = data;
  }
}
