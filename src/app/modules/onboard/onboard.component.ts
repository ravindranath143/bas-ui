import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/OnboardService';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css'],
  providers: []
})
export class OnboardComponent {
    devicesdata$: any;
    show_devices: boolean;
    loading_data: boolean = false;
  	constructor(public onboardService: OnboardService) {
      this.show_devices = this.onboardService.show_devices;
      if(this.show_devices){
        this.loading_data = true;
        this.onboardService.devicesdata$.subscribe(res =>{
          this.devicesdata$ = res;
          this.loading_data = false;
        });
      }
        
    }

    getdevices(){
      this.onboardService.getdevices();
      this.loading_data = true;
      this.onboardService.devicesdata$.subscribe(res =>{
        this.devicesdata$ = res;
        this.show_devices = this.onboardService.show_devices = true;
        this.loading_data = false;
      });
    }

    ngOnInit() {

    }

}
