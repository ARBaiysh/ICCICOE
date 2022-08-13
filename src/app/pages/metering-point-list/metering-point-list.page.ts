import {Component, Input, OnInit, Optional} from '@angular/core';
import {PSubscriberInterface} from '../../base1c/types/pSubscriber.interface';
import {select, Store} from '@ngrx/store';
import {isLoggedInGetPSubscriberSelector, isSubmittingGetPSubscriberSelector, pSubscriberSelector} from '../../base1c/store/selectors';
import {Observable} from 'rxjs';
import {IonRouterOutlet, ModalController, NavController, Platform} from '@ionic/angular';
import {getPSubscriberAction} from '../../base1c/store/actions/getPSubscriber.action';
import {PSubscriberEntityInterface} from '../../base1c/types/pSubscriberEntity.interface';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {MeteringPointDetailsPage} from '../metering-point-details/metering-point-details.page';

@Component({
    selector: 'app-metering-point-list',
    templateUrl: './metering-point-list.page.html',
    styleUrls: ['./metering-point-list.page.scss'],
})
export class MeteringPointListPage implements OnInit {
    @Input() base1cProps: Base1cInterface;
    @Input() pSubscriberProps: PSubscriberInterface;

    searchTerm: string;

    isSubmittingGetPSubscriber$: Observable<boolean>;
    isLoggedInGetPSubscriber$: Observable<boolean | null>;
    pSubscriber$: Observable<PSubscriberEntityInterface | null>;

    constructor(private store: Store,
                private platform: Platform,
                @Optional() private routerOutlet: IonRouterOutlet,
                private navCtrl: NavController,
                private modalController: ModalController
    )  {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.dismissModal();
        });
    }

    dismissModal() {
        this.modalController.dismiss({dismissed: true});
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

    async presentMeteringPointDetailsPage(meteringPoint: MeteringPointEntityInterface) {
        const modal = await this.modalController.create({
            component: MeteringPointDetailsPage,
            componentProps: {
                base1cProps: this.base1cProps, meteringPointProps: meteringPoint
            }
        });
        return await modal.present();
    }

    ngOnInit() {
        this.initializeValues();
    }

    private initializeValues(): void {
        this.store.dispatch(getPSubscriberAction({lsPorm: this.pSubscriberProps.lsProm}));
        this.isSubmittingGetPSubscriber$ = this.store.pipe(select(isSubmittingGetPSubscriberSelector));
        this.isLoggedInGetPSubscriber$ = this.store.pipe(select(isLoggedInGetPSubscriberSelector));
        this.pSubscriber$ = this.store.pipe(select(pSubscriberSelector));
    }
}
