import { Component, OnInit } from '@angular/core';
import {StateService} from '../../services/state.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tempStateChange:number;

  constructor(
    private state:StateService
  ) { }

  ngOnInit(): void {
    this.state.tempValue.subscribe(tempStateValue => this.tempStateChange=tempStateValue);

  }
  stateChange(){
    this.state.changeState(2);
    this.state.changeTempState(2)
    // divSelection=tempdivSelection=2
  }

}
