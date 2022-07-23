import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrorsInterface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.page.html',
  styleUrls: ['./backend-error-messages.page.scss'],
})
export class BackendErrorMessagesPage implements OnInit {

  @Input() backendErrors: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map(
      ( name: string ) => {
        const messages = this.backendErrors[name];
        return `${name}: ${messages}`;
      }
    );
    console.log(this.errorMessages[0]);
  }


}
