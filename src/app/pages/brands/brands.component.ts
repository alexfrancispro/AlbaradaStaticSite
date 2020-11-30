import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandList = [];
  displayContent=0;

  constructor() { }

  ngOnInit(): void {
    this.brandList = [
      {url:"/assets/brands/001.png",title:"Bosch",description:"Bosh Details"},
      {url:"/assets/brands/002.png",title:"Siemens",description:"Siemens Details"},
      {url:"/assets/brands/003.png",title:"Maytag",description:"Maytag details"},
      {url:"/assets/brands/004.png",title:"Miele",description:"Miele Details"},
      {url:"/assets/brands/005.png",title:"Teka",description:"Teka details"},
      {url:"/assets/brands/006.png",title:"Electrolux",description:"Electrolux"}
    ]
  }
  display(index){
    // alert(index);
  }

}
