import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParentsPage } from '../parents/parents';
import { YoungPage } from '../young/young';


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})
export class SelectionPage {

  parents: ParentsPage;
  young: YoungPage;
  constructor(public navCtrl: NavController) {
    this.parents = ParentsPage;
    this.young = YoungPage;

  }

}
