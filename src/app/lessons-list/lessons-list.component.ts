import {Component, OnInit, Input} from '@angular/core';
import {Lesson} from "../shared/model/lesson";
import * as _ from 'lodash';
import {store} from "../event-bus-experiments/app-data";
import {Observer} from 'rxjs';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {

    @Input()
    lessons: Lesson[];



}



