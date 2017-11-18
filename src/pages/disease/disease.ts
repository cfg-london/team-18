import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OneDiseasePage } from '../onedisease/onedisease';

@Component({
  selector: 'page-disease',
  templateUrl: 'disease.html'
})
export class DiseasePage {
  items = [
    'Leukemia',
    'Brain and spinal cord tumors',
    'Neuroblastoma',
    'Wilms tumor',
    'Lymphoma (including both Hodgkin and non-Hodgkin)',
    'Rhabdomyosarcoma',
    'Retinoblastoma',
    'Bone cancer (including osteosarcoma and Ewing sarcoma)'
];

  constructor(public navCtrl: NavController) {

  }

    itemSelected() {
     console.log("Selected disease, prototype for blood cancer");

      this.navCtrl.push(OneDiseasePage);


   }


}
