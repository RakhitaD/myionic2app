import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TubeServiceProvider } from '../../providers/tube-service/tube-service';
import { SingleVideoPage } from '../single-video/single-video';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {
  videos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tubeService:TubeServiceProvider) {
    this.loadVideos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  loadVideos() {
    this.tubeService.load().then(
      data => {
        this.videos = data;
      }
    )
  }

  watchVideo(videoId:string) {
    console.log(videoId);
    this.navCtrl.push(SingleVideoPage,{vidID:videoId});
  }

}
