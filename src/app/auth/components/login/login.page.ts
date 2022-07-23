import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../types/backendErrorsInterface';
import { select, Store } from '@ngrx/store';
import { backendErrorsSelector, isErrorSelector, isSubmittingSelector } from '../../store/selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequestInterface } from '../../types/loginRequestInterface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isErrors$: Observable<boolean>;
  passwordType: string;


  constructor( private fb: FormBuilder, private store: Store ) {

  }

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();

  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
    this.isErrors$ = this.store.pipe(select(isErrorSelector));
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
