import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
<<<<<<< HEAD
import { AgePage } from '../age/age';
=======

//if you want to use other page
//you import it just like below
import { SelectionPage } from '../selection/selection';
import { ParentsPage } from '../parents/parents';

>>>>>>> dec0898ad3f6f82426c81992548a6b9ad698f6b3
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
<<<<<<< HEAD
  tab4Root = AgePage;
=======
  tab4Root = SelectionPage;
>>>>>>> dec0898ad3f6f82426c81992548a6b9ad698f6b3

  constructor() {

  }
}
