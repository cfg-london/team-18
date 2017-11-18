import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgePage } from '../pages/age/age';
import { DiseasePage } from '../pages/disease/disease';
import { OneDiseasePage } from '../pages/onedisease/onedisease';

import { Tips } from '../pages/tips/tips';
import { PeopleStoriesPage } from '../pages/peoplestories/peoplestories';
import { Treatment } from '../pages/treatment/treatment';
import { Parents } from '../pages/parents/parents';
import { Children } from '../pages/children/children';
import { Contribute } from '../pages/contribute/contribute';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgePage,
    DiseasePage,
    OneDiseasePage,
    Tips,
    PeopleStoriesPage,
    Treatment,
    Parents,
    Children,
    Contribute
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgePage,
    DiseasePage,
    OneDiseasePage,
    Tips,
    PeopleStoriesPage,
    Treatment,
    Parents,
    Children,
    Contribute
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
