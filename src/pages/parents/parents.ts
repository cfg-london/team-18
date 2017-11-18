import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Tips } from '../tips/tips';
//import { Treatment } from '../treatment/treatment';
//import { PeopleStoriesPage } from '../peoplestories/peoplestories';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { OneDiseasePage } from '../onedisease/onedisease';


@Component({
 selector: 'page-parents',
 templateUrl: 'parents.html'
})

export class Parents {


 constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

 }


 presentAlert() {
   let alert = this.alertCtrl.create({
     title: 'Our Story',
     subTitle: 'When we find out that Philippe had cancer we were devasted. He is the benjamin of the family so we were really sad. Thankfully the doctors helped us throughout this whole journey of faith and courage. As parents it is our duty to make our kids still feel like they normally growing up despite the disease.',
     buttons: ['Thanks!']
   });

   alert.present();
 }








}
