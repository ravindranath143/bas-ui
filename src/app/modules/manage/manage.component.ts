import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/OnboardService';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: []
})
export class ManageComponent implements OnInit {
  panelOpenState: boolean = false;
  loading_data: boolean = false;
  details_expanded: boolean = false;
  sensors_expanded: boolean = false;
  sitepoint_expanded: boolean = false;
  expanded_id: number = null;
  devicesdata$: any;
  constructor(public onboardService: OnboardService) {
    this.onboardService.getdevices();
    this.onboardService.devicesdata$.subscribe(res =>{
      this.devicesdata$ = res;
    });
  }
  resetpanel(){
    this.expanded_id = null;
    this.details_expanded = false;
    this.sensors_expanded = false;
    this.sitepoint_expanded = false;

  }
  ngOnInit() {

  }

}
