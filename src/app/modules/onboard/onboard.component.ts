import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
export interface Element {
  name: string;
  id: number;
  address: string;
}
@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css'],
  providers: []
})
export class OnboardComponent implements OnInit {
    data: Element[] = [
	  {name: 'RoomController.Simulator', id: 2310257, address: '192.92.93:9273'},
	  {name: 'RoomBase.Simulator', id: 2392672, address: '192.168.3.4:9846'},
	];
    displayedColumns = ['name', 'id', 'address'];
  	tableData = new MatTableDataSource(this.data);
  	constructor() { }

  ngOnInit() {

  }

}
