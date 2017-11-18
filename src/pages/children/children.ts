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
      title: 'title here',
      subTitle: 'Add text here about this person right over here haha ',
      buttons: ['Thanks!']
    });

    alert.present();
  }





}
