import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

/**
 * Generated class for the SingleVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-video',
  templateUrl: 'single-video.html',
})
export class SingleVideoPage {
  public embedId:string;
  public videoLink:any;
  public videoPath:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer:DomSanitizer) {
    this.getLink();
  }

  getLink() {
    this.embedId = this.navParams.get('vidID');
    this.videoPath = `https://www.youtube.com/embed/${this.embedId}`;
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPath);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleVideoPage');
  }

}
