import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParentsPage } from '../parents/parents'


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})
export class SelectionPage {

  parents: ParentsPage;
  constructor(public navCtrl: NavController) {
    this.parents = ParentsPage;

  }

}
