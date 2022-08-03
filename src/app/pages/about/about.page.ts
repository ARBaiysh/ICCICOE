import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInterface } from '../../users/types/userInterface';
import { currentUserSelector, isLoggedInCurrentUserSelector, isSubmittingCurrentUserSelector } from '../../users/store/selectors';
import { Base1cService } from '../../base1c/service/base1c.service';
import { Base1cInterface } from '../../users/types/base1cInterface';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  isSubmittingCurrentUser$: Observable<boolean>;
  isLoggedInCurrentUser$: Observable<boolean | null>;
  currentUser$: Observable<UserInterface | null>;

  constructor( private store: Store, private base1cService: Base1cService ) {
  }

  ngOnInit() {
    this.initializeValues();
  }

  setBase1c( base1c: Base1cInterface ) {
    this.base1cService.setBase1c(base1c);
  }

  private initializeValues() {
    this.isSubmittingCurrentUser$ = this.store.pipe(select(isSubmittingCurrentUserSelector));
    this.isLoggedInCurrentUser$ = this.store.pipe(select(isLoggedInCurrentUserSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
