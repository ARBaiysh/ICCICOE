import {Component, Input, OnInit, Optional, ViewChild} from '@angular/core';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
    isLoggedInGetPSubscribersSelector,
    isSubmittingGetPSubscribersSelector,
    pSubscriberListSelector
} from '../../base1c/store/selectors';
import {
    getNewPSubscribersAction,
    getNextPSubscribersAction,
    getSearchPSubscribersAction
} from '../../base1c/store/actions/getPSubscribers.action';
import {IonInfiniteScroll, IonRouterOutlet, ModalController, NavController, Platform} from '@ionic/angular';
import {PSubscriberInterface} from '../../base1c/types/pSubscriber.interface';
import {MeteringPointListPage} from '../metering-point-list/metering-point-list.page';

@Component({
    selector: 'app-p-subscriber',
    templateUrl: './p-subscriber.page.html',
    styleUrls: ['./p-subscriber.page.scss'],
})
export class PSubscriberPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @Input() base1cProps: Base1cInterface;
    offset: number;
    isShown = [];
    searchLine: string;

    isSubmittingGetPSubscribers$: Observable<boolean>;
    isLoggedInGetPSubscribers$: Observable<boolean | null>;
    pSubscriberList$: Observable<PSubscriberInterface[] | null>;


    constructor(private store: Store,
                private platform: Platform,
                @Optional() private routerOutlet: IonRouterOutlet,
                private navCtrl: NavController,
                private modalController: ModalController
    ) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.dismissModal();
        });
    }

    dismissModal() {
        this.modalController.dismiss({dismissed: true});
    }


    findPSubscribers(): void {
        if (this.searchLine === '') {
            this.offset = 0;
            this.store.dispatch(getNewPSubscribersAction({base1c: this.base1cProps, offset: this.offset}));
            this.infiniteScroll.disabled = false;
        } else {
            this.store.dispatch(getSearchPSubscribersAction({base1c: this.base1cProps, searchLine: this.searchLine}));
            this.infiniteScroll.disabled = true;
        }
    }

    itemTapped(index) {
        this.isShown[index] = !this.isShown[index];
    }

    ngOnInit(): void {
        this.offset = 0;
        this.searchLine = '';
        this.initializeValues();
    }

    doRefresh($event: any): void {
        this.searchLine = '';
        this.offset = 0;
        this.store.dispatch(getNewPSubscribersAction({base1c: this.base1cProps, offset: this.offset}));
        $event.target.complete();
    }

    loadData(event): void {
        this.store.dispatch(getNextPSubscribersAction({base1c: this.base1cProps, offset: this.offset += 25}));
        this.infiniteScroll.disabled = false;
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

    async presentMeteringPointListPage(pSubscriber: PSubscriberInterface) {
        const modal = await this.modalController.create({
            component: MeteringPointListPage,
            componentProps: {
                base1cProps: this.base1cProps,
                pSubscriberProps: pSubscriber
            },
        });
        return await modal.present();
    }


    private initializeValues(): void {
        this.store.dispatch(getNewPSubscribersAction({base1c: this.base1cProps, offset: 0}));
        this.isSubmittingGetPSubscribers$ = this.store.pipe(select(isSubmittingGetPSubscribersSelector));
        this.isLoggedInGetPSubscribers$ = this.store.pipe(select(isLoggedInGetPSubscribersSelector));
        this.pSubscriberList$ = this.store.pipe(select(pSubscriberListSelector));
    }
}
