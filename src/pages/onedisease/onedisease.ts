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
      title: 'Amy\'s Story',
      subTitle: 'Amy lost her life to a brain tumour recently. She experienced severe headaches while studying. Put down to migraines induced by the stress of forthcoming exams, Amy\'s condition was repeatedly misdiagnosed by GPs over a period of six months. It was a visit to an optician, who noticed irregularity in her optic discs that prompted a CT and MRI scan. This revealed a rare, inoperable brain tumour with a less than 1% survival rate.',
      buttons: ['Thanks!']
    });

    alert.present();
  }


}
