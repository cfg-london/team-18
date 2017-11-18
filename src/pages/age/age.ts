import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiseasePage } from '../disease/disease';
import { Children } from '../children/children';


@Component({
  selector: 'page-age',
  templateUrl: 'age.html'
})
export class AgePage {

  constructor(public navCtrl: NavController) {

  }

  openDisease(){
    console.log("new page")
    this.navCtrl.push(DiseasePage);
  }

  openDiseaseChildren(){
    console.log("new children page")
    this.navCtrl.push(Children);
  }


}
