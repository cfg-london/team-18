import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TypePage } from '../type/type';

@Component({
  selector: 'page-age',
  templateUrl: 'age.html'
})
export class AgePage {

  type: TypePage;
  constructor(public navCtrl: NavController) {
    this.type = TypePage;

  }

}
