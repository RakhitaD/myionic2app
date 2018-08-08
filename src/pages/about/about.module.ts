import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { TubeServiceProvider } from '../../providers/tube-service/tube-service';

@NgModule({
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
  providers:[TubeServiceProvider]
})
export class AboutPageModule {}
