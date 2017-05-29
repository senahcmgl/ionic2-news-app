import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
  source: any;
  color: any;
  sort:any;
  header:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getDefaults();
    this.header.backgroundColor=this.color;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }
  getDefaults() {
    if (localStorage.getItem('source') != null) {
      this.source = localStorage.getItem('source');
    } else {
      this.source = 'al-jazeera-english';
    }
    if (localStorage.getItem('color') != null) {
      this.color = localStorage.getItem('color');
    } else {
      this.color = "none";
    }
    if (localStorage.getItem('sort') != null) {
      this.sort = localStorage.getItem('sort');
    } else {
      this.sort = "top";
    }

  }
  setDefaults() {
    console.log("settings.ts:"+this.source,this.sort,this.color);
    localStorage.setItem('source', this.source);
    localStorage.setItem('color', this.color);
    localStorage.setItem('sort', this.sort);
    this.header.backgroundColor=this.color;
    this.navCtrl.setRoot(HomePage);
  }
}
