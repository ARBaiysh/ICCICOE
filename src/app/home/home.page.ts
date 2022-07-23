import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {
  }

  async close() {
    const alert = await this.alertController.create({
      message: 'Do You want to close App ?',
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Close App', handler: () => App.exitApp()}
      ]
    });
    await alert.present();
  }
}
