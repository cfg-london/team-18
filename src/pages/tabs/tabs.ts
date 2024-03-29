import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AgePage } from '../age/age';

//if you want to use other page
//you import it just like below
import { SelectionPage } from '../selection/selection';
import { ParentsPage } from '../parents/parents';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SelectionPage;
  tab5Root = AgePage;

  constructor() {

  }
}
