import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {
  http: HttpClient;
  mobile: Mobile[] = [];
  removedMobile: Mobile[] = [];
  constructor(http: HttpClient) {
    this.http = http;
  }
  fetched: boolean = false; 
  fetchMobile() {
    this.http.get('./assets/mobile.json')
      .subscribe(
        data => {
          if (!this.fetched) {
            this.convert(data);
            this.fetched = true;
          }
        });
  }

  getMobile(): Mobile[] {
    return this.mobile;
  }

  convert(data: any) {
    for (let o of data) {
      let m = new Mobile(o.mobileId, o.mobileName, o.mobilePrice);
      this.mobile.push(m);

    }
  }
  delete(mId: number) {
    let foundIndex: number = -1;
    for (let i = 0; i < this.mobile.length; i++) {
      let m = this.mobile[i];
      if (mId == m.mobileId) {
        foundIndex = i;
        break;
      }
    }
  this.removedMobile= this.mobile.splice(foundIndex, 1);
   return this.removedMobile;
  }
}
  export class Mobile {
    mobileId: number;
    mobileName: string;
    mobilePrice: string
    constructor(mobileId: number, mobileName: string, mobilePrice: string) {
      this.mobileId = mobileId;
      this.mobileName = mobileName;
      this.mobilePrice= mobilePrice;
    }
  }
