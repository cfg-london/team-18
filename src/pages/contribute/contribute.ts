import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-contribute',
  templateUrl: 'contribute.html'
  })

export class Contribute {

  constructor(private toastCtrl: ToastController) {

}
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log("saved")
    console.log(form.value)
  }

  validateButton() {
  let toast = this.toastCtrl.create({
    message: 'Request registered',
    duration: 3000,
    position: 'top'
  });

  toast.present();
}
}
