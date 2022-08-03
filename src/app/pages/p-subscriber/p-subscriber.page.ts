import { Component, OnInit } from '@angular/core';
import { Base1cService } from '../../base1c/service/base1c.service';
import { Base1cInterface } from '../../users/types/base1cInterface';
import { select, Store } from '@ngrx/store';
import { PSubscriberInterface } from '../../base1c/types/pSubscriber.interface';
import { Observable } from 'rxjs';
import {
  isLoggedInGetPSubscribersSelector,
  isSubmittingGetPSubscribersSelector,
  pSubscriberListSelector
} from '../../base1c/store/selectors';
import { getPSubscribersAction } from '../../base1c/store/actions/getPSubscribers.action';

@Component({
  selector: 'app-p-subscriber',
  templateUrl: './p-subscriber.page.html',
  styleUrls: ['./p-subscriber.page.scss'],
})
export class PSubscriberPage implements OnInit {
  base1c: Base1cInterface;
  searchTerm: string;
  public isShown = [];

  isSubmittingGetPSubscribers$: Observable<boolean>;
  isLoggedInGetPSubscribers$: Observable<boolean | null>;
  pSubscriberList$: Observable<PSubscriberInterface[] | null>;

  constructor( private base1cService: Base1cService, private store: Store ) {
    this.isShown[0] = true;
  }

  ngOnInit() {
    this.base1c = this.base1cService.getBase1c();
    this.initializeValues();
  }

  itemTapped( index ) {
    this.isShown[index] = !this.isShown[index];
  }

  doRefresh( $event: any, base1c: Base1cInterface ) {
    this.store.dispatch(getPSubscribersAction({base1c}));
    $event.target.complete();
  }

  private initializeValues() {
    this.isSubmittingGetPSubscribers$ = this.store.pipe(select(isSubmittingGetPSubscribersSelector));
    this.isLoggedInGetPSubscribers$ = this.store.pipe(select(isLoggedInGetPSubscribersSelector));
    this.pSubscriberList$ = this.store.pipe(select(pSubscriberListSelector));
  }


}
