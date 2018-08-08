import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the TubeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TubeServiceProvider {
  data:any =null;
  constructor(public http: HttpClient) {
    console.log('Hello TubeServiceProvider Provider');
  }

  public load() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=ionic&type=video&key=AIzaSyCPOoK6H32qUXFhG7HhmFJlDRYyEkQcD-0`)
      .subscribe(data => {
        this.data = data;
        resolve(this.data.items);
      })
    })
  }

}
