import {Component, OnInit, Optional} from '@angular/core';
import {Base1cService} from '../../base1c/service/base1c.service';
import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';

@Component({
    selector: 'app-metering-point-details',
    templateUrl: './metering-point-details.page.html',
    styleUrls: ['./metering-point-details.page.scss'],
})
export class MeteringPointDetailsPage implements OnInit {

    meteringPoint: MeteringPointEntityInterface;

    constructor(private base1cService: Base1cService,
                private platform: Platform,
                @Optional() private routerOutlet: IonRouterOutlet,
                private navCtrl: NavController) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.goBack();
        });
    }

    public goBack(): void {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.navCtrl.setDirection('back');
            this.routerOutlet.pop();
        } else {
            this.navCtrl.navigateBack('/p-metering-point-list');
        }
    }


    ngOnInit() {
        this.initializeValues();
    }

    private initializeValues(): void {
        this.meteringPoint = this.base1cService.getMeteringPoint();
    }

}
