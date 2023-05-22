import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  carouselURL:string;
  imageURL:string;
  name:string;
  id:string;
  category:string;
  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {
    switch (this.resource.category){
      case 'artist':
        this.carouselURL = `artist/${this.resource.id}`;
        break;
      case 'album':
        this.carouselURL = `album/${this.resource.id}`;
        break;
      default:
        this.carouselURL = this.resource.url;
    }
    this.imageURL = this.resource.imageURL;
    this.name = this.resource.name;
    this.id = this.resource.id;
    this.category = this.resource.category;
  }

}
