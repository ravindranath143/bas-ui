import { Routes } from '@angular/router';

import { ManageComponent } from './modules/manage/manage.component';
import { OnboardComponent } from './modules/onboard/onboard.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'onboard', pathMatch: "full" },
  { path: 'onboard', component: OnboardComponent },
  { path: 'manage',      component: ManageComponent }
];