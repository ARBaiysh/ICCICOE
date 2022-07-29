import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../users/types/userInterface';
import { ModalController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Base1cInterface } from '../../users/types/base1cInterface';
import { select, Store } from '@ngrx/store';
import { base1cListSelector, isLoggedInGetAllBase1cSelector, isSubmittingGetAllBase1cSelector } from '../../base1c/store/selectors';
import { getAllBases1cAction } from '../../base1c/store/actions/getAllBase1c.action';
import { BackendErrorsInterface } from '../../auth/types/backendErrorsInterface';
import {
  isLoggedInUpdateSelector,
  isSubmittingUpdateUserSelector,
  updateBackendErrorsResponseSelector,
  usersUpdateSelector
} from '../../users/store/selectors';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  @Input() userProps: UserInterface;
  form: FormGroup;

  isSubmittingGetAllBase1c$: Observable<boolean>;
  isLoggedInGetAllBase1c$: Observable<boolean | null>;
  base1cList$: Observable<Base1cInterface[] | null>;

  isSubmittingUpdateUser$: Observable<boolean>;
  isLoggedInUpdate$: Observable<boolean | null>;
  usersUpdate$: Observable<UserInterface | null>;
  updateBackendErrorsResponse: Observable<BackendErrorsInterface | null>;


  constructor( private fb: FormBuilder,
               public modalController: ModalController,
               private platform: Platform,
               private store: Store
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.dismissModal();
    });
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
    this.store.dispatch(getAllBases1cAction());
    this.initializeForm();
    this.initializeValues();
  }

  dismissModal() {
    this.modalController.dismiss({dismissed: true});
  }

  containsBase1c( base1s: Base1cInterface ): boolean {
    let flag = false;
    this.userProps.base1cDTO.forEach(base => {
      if (base.id === base1s.id) {
        flag = true;
      }
    });
    return flag;
  }

  onSubmit() {

  }

  private initializeValues(): void {
    this.isSubmittingGetAllBase1c$ = this.store.pipe(select(isSubmittingGetAllBase1cSelector));
    this.isLoggedInGetAllBase1c$ = this.store.pipe(select(isLoggedInGetAllBase1cSelector));
    this.base1cList$ = this.store.pipe(select(base1cListSelector));

    this.isSubmittingUpdateUser$ = this.store.pipe(select(isSubmittingUpdateUserSelector));
    this.isLoggedInUpdate$ = this.store.pipe(select(isLoggedInUpdateSelector));
    this.usersUpdate$ = this.store.pipe(select(usersUpdateSelector));
    this.updateBackendErrorsResponse = this.store.pipe(select(updateBackendErrorsResponseSelector));
  }
}
