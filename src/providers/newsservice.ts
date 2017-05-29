import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Newsservice {
  http:any;
  constructor(http: Http) {
    this.http=http;
    console.log('Hello Newsservice Provider');
  }
  getPosts(source,sort){
        var sort_value=sort;

        if(source=="bbc-news" || source=="cnbc" || source=="cnn" || source=="the-new-york-times")
        {
          sort_value="top";
        }
        return this.http.get('https://newsapi.org/v1/articles?source='+source+'&sortBy='+sort_value+'&apiKey={{YOUR API KEY}}').
        map(res=>res.json());
    }
}
