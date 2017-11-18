import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParentsPage } from '../parents/parents';
import { AgePage } from '../age/age';


@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})
export class SelectionPage {

  parents: ParentsPage;
  age: AgePage;
  constructor(public navCtrl: NavController) {
     this.age = AgePage;
     this.parents = ParentsPage;

  }

}
