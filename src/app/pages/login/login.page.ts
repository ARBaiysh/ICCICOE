import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../auth/types/backendErrorsInterface';
import {select, Store} from '@ngrx/store';
import {backendErrorsLoginSelector, isSubmittingLoginSelector} from '../../auth/store/selectors';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginRequestInterface} from '../../auth/types/loginRequestInterface';
import {loginAction} from '../../auth/store/actions/login.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    form: FormGroup;

    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    passwordType: string;

    constructor(private fb: FormBuilder, private store: Store) {

    }

    ngOnInit() {
        this.initializeForm();
        this.initializeValues();

    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingLoginSelector));
        this.backendErrors$ = this.store.pipe(select(backendErrorsLoginSelector));
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        const request: LoginRequestInterface = this.form.value;
        this.store.dispatch(loginAction({request}));
    }

    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
}
