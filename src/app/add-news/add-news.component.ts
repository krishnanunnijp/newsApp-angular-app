import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  name = ""
  author=""
  title=""
  description=""
  url=""
  urlToImage=""
  content=""

  newsAdd = () => {
    let data: any =
    {

          "source":
          {
            "id": null,
            "name": this.name
          },
          "author": this.author,
          "title": this.title,
          "description": this.description,
          "url": this.url,
          "urlToImage": this.urlToImage,
          "content": this.content

    }
    console.log(data)
  }


}

