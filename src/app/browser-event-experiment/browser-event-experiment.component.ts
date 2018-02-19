import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'browser-event-experiment',
  templateUrl: './browser-event-experiment.component.html',
  styleUrls: ['./browser-event-experiment.component.css']
})
export class BrowserEventExperimentComponent implements OnInit {

  hoverElement: HTMLElement;

  ngOnInit() {

    this.hoverElement = document.getElementById('hover');

    this.hoverElement.addEventListener('mousemove', onmousemove);
  }

  unsubscribe() {
    console.log('Called unsubscribed');
    this.hoverElement.removeEventListener('mousemove', onmousemove);
  }

}

function onmousemove(ev: MouseEvent) {
  console.log(ev);
}
