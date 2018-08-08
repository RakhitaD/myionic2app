import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { VideoPage } from '../pages/video/video';
import { TubeServiceProvider } from '../providers/tube-service/tube-service';
import { MyApp } from './app.component';
import { SingleVideoPage } from '../pages/single-video/single-video';
import { FormsModule } from '../../node_modules/@angular/forms';
import { Camera } from '@ionic-native/camera';
import { PhotoPage } from '../pages/photo/photo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    VideoPage,
    SingleVideoPage,
    PhotoPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    VideoPage,
    SingleVideoPage,
    PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TubeServiceProvider,
    Camera
  ]
})
export class AppModule {}
