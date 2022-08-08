import { Component, OnInit, Optional } from '@angular/core';
import { Base1cService } from '../../base1c/service/base1c.service';
import { IonRouterOutlet, ModalController, NavController, Platform } from '@ionic/angular';
import { MeteringPointEntityInterface } from '../../base1c/types/meteringPointEntityInterface';
import { UserInterface } from '../../users/types/userInterface';
import { UserEditPage } from '../user-edit/user-edit.page';
import { MeteringPointHistoryPage } from '../metering-point-history/metering-point-history.page';
import { MeterReadingsPage } from '../meter-readings/meter-readings.page';

@Component({
  selector: 'app-metering-point-details',
  templateUrl: './metering-point-details.page.html',
  styleUrls: ['./metering-point-details.page.scss'],
})
export class MeteringPointDetailsPage implements OnInit {

  meteringPoint: MeteringPointEntityInterface;

  constructor( private base1cService: Base1cService,
               private platform: Platform,
               @Optional() private routerOutlet: IonRouterOutlet,
               private navCtrl: NavController,
               private modalController: ModalController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  async presentModalMeteringPointHistory(meteringPoint: MeteringPointEntityInterface) {
    const modal = await this.modalController.create({
      component: MeteringPointHistoryPage,
      componentProps: {meteringPointProps: meteringPoint}
    });
    return await modal.present();
  }

  async presentModalMeterReadings(meteringPoint: MeteringPointEntityInterface) {
    const modal = await this.modalController.create({
      component: MeterReadingsPage,
      componentProps: {meteringPointProps: meteringPoint}
    });
    return await modal.present();
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
