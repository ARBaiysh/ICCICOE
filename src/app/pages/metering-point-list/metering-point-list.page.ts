import {Component, OnInit, Optional} from '@angular/core';
import {Base1cService} from '../../base1c/service/base1c.service';
import {PSubscriberInterface} from '../../base1c/types/pSubscriber.interface';
import {select, Store} from '@ngrx/store';
import {isLoggedInGetPSubscriberSelector, isSubmittingGetPSubscriberSelector, pSubscriberSelector} from '../../base1c/store/selectors';
import {Observable} from 'rxjs';
import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {getPSubscriberAction} from '../../base1c/store/actions/getPSubscriber.action';
import {PSubscriberEntityInterface} from '../../base1c/types/pSubscriberEntity.interface';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';

@Component({
    selector: 'app-metering-point-list',
    templateUrl: './metering-point-list.page.html',
    styleUrls: ['./metering-point-list.page.scss'],
})
export class MeteringPointListPage implements OnInit {
    pSubscriber: PSubscriberInterface;
    searchTerm: string;

    isSubmittingGetPSubscriber$: Observable<boolean>;
    isLoggedInGetPSubscriber$: Observable<boolean | null>;
    pSubscriber$: Observable<PSubscriberEntityInterface | null>;

    constructor(private base1cService: Base1cService,
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
            this.navCtrl.navigateBack('/p-subscriber');
        }
    }

    meteringPointColorTU(tu: string): string {
        if (tu === 'Основная') {
            return 'is-item-category-success';
        } else if (tu.includes('Дополнительная')) {
            return 'is-item-category-secondary';
        } else {
            return 'is-item-category-dark';
        }
    }

    setMeteringPoint(meteringPoint: MeteringPointEntityInterface) {
        this.base1cService.setMeteringPoint(meteringPoint);
    }
    ngOnInit() {
        this.pSubscriber = this.base1cService.getPSubscriber();
        this.initializeValues();
    }

    private initializeValues(): void {
        this.store.dispatch(getPSubscriberAction({lsPorm: this.pSubscriber.lsProm}));
        this.isSubmittingGetPSubscriber$ = this.store.pipe(select(isSubmittingGetPSubscriberSelector));
        this.isLoggedInGetPSubscriber$ = this.store.pipe(select(isLoggedInGetPSubscriberSelector));
        this.pSubscriber$ = this.store.pipe(select(pSubscriberSelector));
    }


}
