import {Component, Input, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import {MeteringPointEntityInterface} from '../../base1c/types/meteringPointEntityInterface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {MessageResponseInterface} from '../../controlReading/types/messageResponse.interface';
import {Observable} from 'rxjs';
import {isLoggedInCRSelector, isSubmittingSRSelector, messageResponseSelector} from '../../controlReading/store/selectors';
import {ControlReadingRequestInterface} from '../../controlReading/types/controlReadingRequest.interface';
import {createControlReadingAction} from '../../controlReading/store/actions/createControlReading.action';
import {Base1cInterface} from '../../users/types/base1cInterface';

@Component({
    selector: 'app-meter-readings',
    templateUrl: './meter-readings.page.html',
    styleUrls: ['./meter-readings.page.scss'],
})
export class MeterReadingsPage implements OnInit {
    @Input() meteringPointProps: MeteringPointEntityInterface;
    @Input() base1cProps: Base1cInterface;
    form: FormGroup;

    isSubmittingCR$: Observable<boolean>;
    isLoggedInCR$: Observable<boolean | null>;
    messageResponse$: Observable<MessageResponseInterface | null>;

    constructor(private fb: FormBuilder,
                private modalController: ModalController,
                private platform: Platform,
                private store: Store
    ) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.dismissModal();
        });
    }

    dismissModal() {
        this.modalController.dismiss({dismissed: true});
    }

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            meterRiding: ['', Validators.compose([Validators.required])],
            baseID: [this.base1cProps.id],
            lsMeteringPoint: [this.meteringPointProps.lsAbon]
        });
    }

    initializeValues(): void {
        this.isSubmittingCR$ = this.store.pipe(select(isSubmittingSRSelector));
        this.isLoggedInCR$ = this.store.pipe(select(isLoggedInCRSelector));
        this.messageResponse$ = this.store.pipe(select(messageResponseSelector));
    }

    onSubmit(): void {
        const controlReadingRequest: ControlReadingRequestInterface = this.form.value;
        this.store.dispatch(createControlReadingAction({controlReadingRequest}));
    }
}
