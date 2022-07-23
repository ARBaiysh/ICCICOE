import { Component, ViewChild } from '@angular/core';
import { App } from '@capacitor/app';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true})
  routerOutlet: IonRouterOutlet;

  constructor( private platform: Platform, private alertController: AlertController, private location: Location ) {
    this.platform.ready().then(() => {
      this.backButtonEvent();
    });

  }

  private backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet.canGoBack()) {
        this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }


  private async backButtonAlert() {
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
