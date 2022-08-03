import { Component, OnInit } from '@angular/core';
import { Base1cService } from '../../base1c/service/base1c.service';
import { Base1cInterface } from '../../users/types/base1cInterface';

@Component({
  selector: 'app-p-subscriber',
  templateUrl: './p-subscriber.page.html',
  styleUrls: ['./p-subscriber.page.scss'],
})
export class PSubscriberPage implements OnInit {
  base1c: Base1cInterface;

  constructor( private base1cService: Base1cService ) {
  }

  ngOnInit() {
    this.base1c = this.base1cService.getBase1c();
  }
}
