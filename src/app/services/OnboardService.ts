import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './BaseService';
import { API_CONFIG } from '../core/Config';
@Injectable()
export class OnboardService {
  show_devices: boolean = false;
  devicesdata$: Observable<any>;
  constructor(private baseService: BaseService) { }

  getdevices(){
  	let url = API_CONFIG.GET_DEVICES;
  	this.devicesdata$ = this.baseService.get(url);
  }
}
