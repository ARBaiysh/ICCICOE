import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {RegisterRequestInterface} from '../../auth/types/registerRequest.interface';
import {registerAction} from '../../auth/store/actions/register.action';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../auth/types/backendErrorsInterface';
import {backendErrorsRegisterSelector, isSubmittingRegisterSelector} from '../../auth/store/selectors';
import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    form: FormGroup;

    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder,
                private store: Store,
                private platform: Platform,
                @Optional() private routerOutlet: IonRouterOutlet,
                private navCtrl: NavController
    ) {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.goBack();
        });
    }

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            username: ['', Validators.compose([Validators.required])],
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            position: ['', Validators.compose([Validators.required])],
            resName: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
            confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])]
        });
    }

    public goBack(): void {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.navCtrl.setDirection('back');
            this.routerOutlet.pop();
        } else {
            this.navCtrl.navigateBack('/nav/about');
        }
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingRegisterSelector));
        this.backendErrors$ = this.store.pipe(select(backendErrorsRegisterSelector));
    }

    onSubmit(): void {
        const request: RegisterRequestInterface = this.form.value;
        this.store.dispatch(registerAction({request}));
    }
}
