import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit {
  lessonsCounter = 0;

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }

  error(err) {
    console.log(err);
  }

  complete() {
    console.log('complete');
  }
}
