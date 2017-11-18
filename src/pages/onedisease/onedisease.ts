import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tips } from '../tips/tips';
import { Treatment } from '../treatment/treatment';
import { PeopleStoriesPage } from '../peoplestories/peoplestories';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-onedisease',
  templateUrl: 'onedisease.html'
})
export class OneDiseasePage {


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
