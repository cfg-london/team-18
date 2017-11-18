import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

<<<<<<< HEAD
//Age page declaration
import { AgePage } from '../pages/age/age';
=======
//selection page declaration
import { SelectionPage } from '../pages/selection/selection';
import { ParentsPage } from '../pages/parents/parents';
import { YoungPage } from '../pages/young/young';
>>>>>>> dec0898ad3f6f82426c81992548a6b9ad698f6b3

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    AgePage
=======
    SelectionPage,
    ParentsPage,
    YoungPage
>>>>>>> dec0898ad3f6f82426c81992548a6b9ad698f6b3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    AgePage
=======
    SelectionPage,
    ParentsPage,
    YoungPage
>>>>>>> dec0898ad3f6f82426c81992548a6b9ad698f6b3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
