import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Newsservice } from '../../providers/newsservice';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers:[Newsservice]
})
export class DetailsPage {
  item:any;
  header:any={};
  color:any;
  constructor(public navCtrl: NavController,public params:NavParams, private redditService:Newsservice) {
    this.item=params.get('item');
    this.color = localStorage.getItem('color');
    this.header.backgroundColor=this.color;
  }
  
}
