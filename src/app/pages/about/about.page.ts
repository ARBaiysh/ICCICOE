import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {UserInterface} from '../../users/types/userInterface';
import {currentUserSelector, isLoggedInCurrentUserSelector, isSubmittingCurrentUserSelector} from '../../users/store/selectors';
import {Base1cService} from '../../base1c/service/base1c.service';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {AlertController, IonRouterOutlet, Platform} from '@ionic/angular';
import {Location} from '@angular/common';
import {App} from '@capacitor/app';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
    @ViewChild(IonRouterOutlet, {static: true})
    routerOutlet: IonRouterOutlet;

    isSubmittingCurrentUser$: Observable<boolean>;
    isLoggedInCurrentUser$: Observable<boolean | null>;
    currentUser$: Observable<UserInterface | null>;

    constructor(private store: Store,
                private base1cService: Base1cService,
                private platform: Platform,
                private alertController: AlertController,
                private location: Location
    ) {
        platform.ready().then(() => {
            this.backButtonEvent();
        });
    }

    ngOnInit() {
        this.initializeValues();
    }

    setBase1c(base1c: Base1cInterface): void {
        this.base1cService.setBase1c(base1c);
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

    private initializeValues() {
        this.isSubmittingCurrentUser$ = this.store.pipe(select(isSubmittingCurrentUserSelector));
        this.isLoggedInCurrentUser$ = this.store.pipe(select(isLoggedInCurrentUserSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}
