import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  public myImage:string='';

  constructor(public navCtrl: NavController,private _camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      //destinationType: this._camera.DestinationType.FILE_URI,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE
    }

    console.log('capture ready!');

    this._camera.getPicture(options).then((imageData) => {
      this.myImage = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      console.log(err);
     });
  }
}
