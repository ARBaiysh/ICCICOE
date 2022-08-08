import { Component, Input, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { MeteringPointEntityInterface } from '../../base1c/types/meteringPointEntityInterface';

@Component({
  selector: 'app-meter-readings',
  templateUrl: './meter-readings.page.html',
  styleUrls: ['./meter-readings.page.scss'],
})
export class MeterReadingsPage implements OnInit {

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
