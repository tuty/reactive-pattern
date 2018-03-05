import { Observable } from 'rxjs/Rx';
import { UserService, UNKNOWN_USER } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.user$.map(user => user !== UNKNOWN_USER)
  }
}
