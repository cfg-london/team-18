import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgePage } from '../age/age';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openYoung(){

    console.log("new young page")

    this.navCtrl.push(AgePage);

  }

  openParent(){
      console.log("asdasd")
  }

}
