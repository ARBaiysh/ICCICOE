import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../users/types/userInterface';
import {ModalController, Platform} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.page.html',
    styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
    @Input() userProps: UserInterface;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                public modalController: ModalController,
                private platform: Platform,
    ) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.dismissModal();
        });
        this.initializeForm();
    }
    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.compose([Validators.required])],
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            position: ['', Validators.compose([Validators.required])],
            resName: ['', Validators.compose([Validators.required])],
        });
    }


    ngOnInit() {
    }


    dismissModal() {
        this.modalController.dismiss({dismissed: true});
    }

    onSubmit() {

    }
}
