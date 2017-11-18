import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgePage } from '../age/age';
import { Parents } from '../parents/parents';
import { Contribute } from '../contribute/contribute';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openYoung(){

    console.log("new young page")

    this.navCtrl.push(AgePage)

  }

  openParent(){
      console.log("asdasd")
      this.navCtrl.push(Parents)

  }

  contribute(){

        console.log("contribution")
        this.navCtrl.push(Contribute)
  }

}
