import {Component, Input, OnInit, Optional} from '@angular/core';
import {IonRouterOutlet, ModalController, NavController, Platform} from '@ionic/angular';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';
import {MeterReadingsPage} from '../meter-readings/meter-readings.page';
import {Base1cInterface} from '../../users/types/base1cInterface';

@Component({
    selector: 'app-metering-point-details',
    templateUrl: './metering-point-details.page.html',
    styleUrls: ['./metering-point-details.page.scss'],
})
export class MeteringPointDetailsPage implements OnInit {
    @Input()
    base1cProps: Base1cInterface;

    @Input()
    meteringPointProps: MeteringPointEntityInterface;

    constructor(private platform: Platform,
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

    async presentMeterReadingsPage(meteringPoint: MeteringPointEntityInterface) {
        const modal = await this.modalController.create({
            component: MeterReadingsPage,
            componentProps: {meteringPointProps: meteringPoint, base1cProps: this.base1cProps}
        });
        return await modal.present();
    }

    ngOnInit() {

    }

}
