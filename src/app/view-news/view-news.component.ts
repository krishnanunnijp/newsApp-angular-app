import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent {
    data: any={}
    constructor(private api:ApiService){

      api.fetchNews().subscribe(
        (readValues)=>{
          this.data=readValues
        }
      )

    }

}   
