import { Component, OnInit } from '@angular/core';
import {UserdataService } from '../userdata.service';

@Component({
  selector: 'app-modifierinfos',
  templateUrl: './modifierinfos.component.html',
  styleUrls: ['./modifierinfos.component.css']
})
export class ModifierinfosComponent implements OnInit {

  datas=[]

  constructor(private myDatas : UserdataService) { }

  ngOnInit() {
      this.datas=this.myDatas.getDatas()
  }

}
