import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController, Platform} from '@ionic/angular';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {MessageResponseInterface} from '../../controlReading/types/messageResponse.interface';
import {Observable} from 'rxjs';
import {
    controlReadingListSelector, isLoggedInCreateCRCRSelector,
    isLoggedInCRSelector,
    isSubmittingCreateCRSelector,
    isSubmittingSRSelector,
    messageResponseSelector
} from '../../controlReading/store/selectors';
import {ControlReadingRequestInterface} from '../../controlReading/types/controlReadingRequest.interface';
import {createControlReadingAction} from '../../controlReading/store/actions/createControlReading.action';
import {Base1cInterface} from '../../users/types/base1cInterface';
import {ControlReadingInterface} from '../../controlReading/types/controlReading.interface';
import {getControlReadingListAction} from '../../controlReading/store/actions/getControlReadingList.action';
import {MetringPointService} from '../../controlReading/service/metringPoint.service';

@Component({
    selector: 'app-meter-readings',
    templateUrl: './meter-readings.page.html',
    styleUrls: ['./meter-readings.page.scss'],
})
export class MeterReadingsPage implements OnInit {
    @Input() meteringPointProps: MeteringPointEntityInterface;
    @Input() base1cProps: Base1cInterface;
    form: FormGroup;
    showForm: boolean;

    lsMeteringPoint: string;

    isSubmittingCR$: Observable<boolean>;
    isLoggedInCR$: Observable<boolean | null>;
    controlReadingList$: Observable<ControlReadingInterface[] | null>;

    isSubmittingCreateCR$: Observable<boolean>;
    isLoggedInCreateCR$: Observable<boolean | null>;
    messageResponse$: Observable<MessageResponseInterface | null>;

    constructor(private fb: FormBuilder,
                private modalController: ModalController,
                private platform: Platform,
                private store: Store,
                private metringPointService: MetringPointService,
                private alertController: AlertController
    ) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.dismissModal();
        });
    }

    dismissModal() {
        this.modalController.dismiss({dismissed: true});
    }

    ngOnInit() {
        this.showForm = true;
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            meterRiding: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
            baseID: [this.base1cProps.id],
            lsMeteringPoint: [this.meteringPointProps.lsAbon]
        });
    }

    initializeValues(): void {
        this.lsMeteringPoint = this.meteringPointProps.lsAbon;
        this.store.dispatch(getControlReadingListAction({lsMeteringPoint: this.lsMeteringPoint}));

        this.isSubmittingCR$ = this.store.pipe(select(isSubmittingSRSelector));
        this.isLoggedInCR$ = this.store.pipe(select(isLoggedInCRSelector));
        this.controlReadingList$ = this.store.pipe(select(controlReadingListSelector));

        this.isSubmittingCreateCR$ = this.store.pipe(select(isSubmittingCreateCRSelector));
        this.isLoggedInCreateCR$ = this.store.pipe(select(isLoggedInCreateCRCRSelector));
        this.messageResponse$ = this.store.pipe(select(messageResponseSelector));
    }

    async onSubmit() {
        const controlReadingRequest: ControlReadingRequestInterface = this.form.value;
        this.store.dispatch(createControlReadingAction({controlReadingRequest}));
        this.metringPointService.setLsMeteringPoint(this.lsMeteringPoint);
        this.showForm = false;
        const alert = await this.alertController.create({
            message: 'Контрольное показание занесено',
            buttons: ['OK'],
        });

        await alert.present();
    }

    massageResponse(message: string): string {
        if (message.includes('Контрольные показания занесены')) {
            return 'success';
        } else {
            return 'warning';
        }
    }
}
