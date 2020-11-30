import { Component, OnInit } from '@angular/core';
import {StateService} from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'albaradaStaticSite';
  divSelection=1;
  tempdivSelection=1;
  menuItems=[
    {className:'menu-head submenu',id:1,name:'Home'},
    {className:'menu-head submenu',id:2,name:'About'},
    {className:'menu-head submenu',id:3,name:'Services'},
    {className:'menu-head submenu',id:4,name:'Brands'},
    {className:'menu-head submenu',id:5,name:'Projects'},
    {className:'menu-head submenu',id:6,name:'Career'},
    {className:'menu-head submenu',id:7,name:'Contact'},
    {className:'menu-head submenu',id:8,name:'Gallery'}
  ]
  homeImages=[
    {loc:'assets/home004.jpg'},
    {loc:'assets/home001.jpg'},
    {loc:'assets/home002.jpg'},
    {loc:'assets/home003.jpg'},
  ];
  constructor(private state:StateService){}

  ngOnInit(){
    this.state.currentValue.subscribe(selectedValue => this.divSelection=selectedValue);
    this.state.tempValue.subscribe(selectedTempValue => this.tempdivSelection=selectedTempValue);
  }

  navClick(type){
    if(type=='open'){
      this.divSelection=0;

    }else if(type=='close'){
      this.divSelection=this.tempdivSelection;

    }

  }
  changeComponent(componentId){
    this.state.changeState(componentId);
    this.state.changeTempState((componentId))
    this.state.currentValue.subscribe(selectedValue => this.divSelection=selectedValue);
    this.state.tempValue.subscribe(selectedTempValue => this.tempdivSelection=selectedTempValue);
    // this.divSelection=this.tempdivSelection=componentId;
  }
}
