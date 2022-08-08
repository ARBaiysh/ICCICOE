import { Component, Input, OnInit } from '@angular/core';
import { MeteringPointEntityInterface } from '../../base1c/types/meteringPointEntityInterface';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-metering-point-history',
  templateUrl: './metering-point-history.page.html',
  styleUrls: ['./metering-point-history.page.scss'],
})
export class MeteringPointHistoryPage implements OnInit {

  @Input() meteringPointProps: MeteringPointEntityInterface;

  constructor(
    private modalController: ModalController,
    private platform: Platform,
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.modalController.dismiss({dismissed: true});
  }

  ngOnInit() {

  }

}
