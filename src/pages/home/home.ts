import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Newsservice } from '../../providers/newsservice';
import {DetailsPage} from '../details/details'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Newsservice]
})
export class HomePage {
  items: any;
  source: any;
  color:any;
  sort:any;
  header:any={};
  constructor(public navCtrl: NavController, private redditService:Newsservice) {
    this.getDefaults();
    this.header.backgroundColor=this.color;
  }
  ngOnInit() {
    this.getPosts(this.source,this.sort);

  }
  getPosts(source,sort) {
    this.redditService.getPosts(source,sort).subscribe(response => {

      this.items = response.articles;
    });
  }
  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item:item
    });
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
      this.color = "lightgreen";
    }
    if (localStorage.getItem('sort') != null) {
      this.sort = localStorage.getItem('sort');
    } else {
      this.sort = "top";
    }

  }
    changeSource() {
      console.log("home.ts:"+this.source,this.sort);
    this.getPosts(this.source,this.sort);
  }
}
