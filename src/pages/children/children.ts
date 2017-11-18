import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-children',
  templateUrl: 'children.html'
})

export class Children {


  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'My Story',
      subTitle: 'At age 4, during a routine health control doctors found something wrong in my blood. I have really nice doctors that are taking care of me. Whenever I feel bad watching cartoons and drawing really helps.',
      buttons: ['Thanks!']
    });

    alert.present();
  }





}
