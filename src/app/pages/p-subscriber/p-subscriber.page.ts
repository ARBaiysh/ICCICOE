import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { Base1cService } from '../../base1c/service/base1c.service';
import { Base1cInterface } from '../../users/types/base1cInterface';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  isLoggedInGetPSubscribersSelector, isSubmittingGetPSubscribersSelector,
  pSubscriberListSelector
} from '../../base1c/store/selectors';
import {
  getNewPSubscribersAction,
  getNextPSubscribersAction,
  getSearchPSubscribersAction
} from '../../base1c/store/actions/getPSubscribers.action';
import { IonInfiniteScroll, IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { PSubscriberInterface } from '../../base1c/types/pSubscriber.interface';

@Component({
  selector: 'app-p-subscriber',
  templateUrl: './p-subscriber.page.html',
  styleUrls: ['./p-subscriber.page.scss'],
})
export class PSubscriberPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  base1c: Base1cInterface;
  offset: number;
  isShown = [];
  searchLine: string;

  isSubmittingGetPSubscribers$: Observable<boolean>;
  isLoggedInGetPSubscribers$: Observable<boolean | null>;
  pSubscriberList$: Observable<PSubscriberInterface[] | null>;


  constructor( private base1cService: Base1cService,
               private store: Store,
               private platform: Platform,
               @Optional() private routerOutlet: IonRouterOutlet,
               private navCtrl: NavController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  public goBack(): void {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.navCtrl.setDirection('back');
      this.routerOutlet.pop();
    } else {
      this.navCtrl.navigateBack('/nav/about');
    }
  }

  findPSubscribers(): void {
    if (this.searchLine === '') {
      this.offset = 0;
      this.store.dispatch(getNewPSubscribersAction({base1c: this.base1c, offset: this.offset}));
      this.infiniteScroll.disabled = false;
    } else {
      this.store.dispatch(getSearchPSubscribersAction({base1c: this.base1c, searchLine: this.searchLine}));
      this.infiniteScroll.disabled = true;
    }
  }

  itemTapped( index ) {
    this.isShown[index] = !this.isShown[index];
  }

  ngOnInit(): void {
    this.offset = 0;
    this.searchLine = '';
    this.base1c = this.base1cService.getBase1c();
    this.initializeValues();
  }

  doRefresh( $event: any ): void {
    this.searchLine = '';
    this.offset = 0;
    this.store.dispatch(getNewPSubscribersAction({base1c: this.base1c, offset: this.offset}));
    $event.target.complete();
  }

  loadData( event ): void {
    this.store.dispatch(getNextPSubscribersAction({base1c: this.base1c, offset: this.offset += 25}));
    this.infiniteScroll.disabled = false;
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  setPSubscriber( pSubscriber: PSubscriberInterface ) {
    this.base1cService.setPSubscriber(pSubscriber);
  }

  private initializeValues(): void {
    this.store.dispatch(getNewPSubscribersAction({base1c: this.base1c, offset: 0}));
    this.isSubmittingGetPSubscribers$ = this.store.pipe(select(isSubmittingGetPSubscribersSelector));
    this.isLoggedInGetPSubscribers$ = this.store.pipe(select(isLoggedInGetPSubscribersSelector));
    this.pSubscriberList$ = this.store.pipe(select(pSubscriberListSelector));
  }
}
