import { Component, OnInit } from '@angular/core';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stateChange:number;
  tempStateChange:number;

  constructor(private state:StateService) { }

  ngOnInit(): void {
    this.state.currentValue.subscribe(selectedValue => this.stateChange=selectedValue);
    this.state.tempValue.subscribe(tempStateValue => this.tempStateChange=tempStateValue);
  }
  changeState(value){
    if(value=="open"){
      this.state.changeState(0);
    }else if("close"){
      this.state.tempValue.subscribe(selectedValue=> this.stateChange= selectedValue)
      this.state.changeState( this.tempStateChange);
    }
  }

}
