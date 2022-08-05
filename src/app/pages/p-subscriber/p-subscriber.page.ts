import {Component, OnInit, ViewChild} from '@angular/core';
import {Base1cService} from '../../base1c/service/base1c.service';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isLoggedInGetPSubscribersSelector, isSubmittingGetPSubscribersSelector, pSubscriberListSelector} from '../../base1c/store/selectors';
import {getNextPSubscribersAction, getNewPSubscribersAction} from '../../base1c/store/actions/getPSubscribers.action';
import {IonInfiniteScroll} from '@ionic/angular';
import {PSubscriberInterface} from '../../base1c/types/pSubscriber.interface';
import {isLoggedInAllUsersSelector, isSubmittingAllUsersSelector} from '../../users/store/selectors';
import {getAllUsersAction} from '../../users/store/actions/getAllUsers.action';

@Component({
    selector: 'app-p-subscriber',
    templateUrl: './p-subscriber.page.html',
    styleUrls: ['./p-subscriber.page.scss'],
})
export class PSubscriberPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
    base1c: Base1cInterface;
    searchTerm: string;
    offset: number;
    isShown = [];

    // pSubscriberList: PSubscriberInterface[] = [];

    isSubmittingGetPSubscribers$: Observable<boolean>;
    isLoggedInGetPSubscribers$: Observable<boolean | null>;
    pSubscriberList$: Observable<PSubscriberInterface[] | null>;


    constructor(private base1cService: Base1cService, private store: Store) {
        this.offset = 0;
    }

    itemTapped(index) {
        this.isShown[index] = !this.isShown[index];
    }

    ngOnInit(): void {
        this.base1c = this.base1cService.getBase1c();
        this.initializeValues();
    }

    doRefresh($event: any): void {
        // this.pSubscriberList = [];

        $event.target.complete();
    }

    loadData(event): void {
        this.store.dispatch(getNextPSubscribersAction({base1c: this.base1c, offset: this.offset += 1}));

        // this.base1cService.getPSubscribers(this.base1c, this.offset += 1).subscribe(data => {
        //     this.pSubscriberList = [...this.pSubscriberList, ...data];
        //     console.log(this.pSubscriberList);
        // });

        event.target.complete();
    }

    private initializeValues(): void {
        this.store.dispatch(getNewPSubscribersAction({base1c: this.base1c, offset: this.offset}));
        this.isSubmittingGetPSubscribers$ = this.store.pipe(select(isSubmittingGetPSubscribersSelector));
        this.isLoggedInGetPSubscribers$ = this.store.pipe(select(isLoggedInGetPSubscribersSelector));
        this.pSubscriberList$ = this.store.pipe(select(pSubscriberListSelector));
        // this.base1cService.getPSubscribers(this.base1c, this.offset).subscribe(data => {
        //     this.pSubscriberList = [...this.pSubscriberList, ...data];
        //     console.log(this.pSubscriberList);
        // });
    }

}
