import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { VideoPage } from '../video/video';
import { PhotoPage } from '../photo/photo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  about() {
    this.nav.push(AboutPage);
  }

  goToVideo() {
    this.nav.push(VideoPage);
  }

  onTakePic() {
    this.nav.push(PhotoPage);
  }

}
