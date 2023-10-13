import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpComponent } from './pages/up/up.component';
import { DownComponent } from './pages/down/down.component';
import { ResetComponent } from './pages/reset/reset.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/up', pathMatch: 'full'},
  { path: 'up', component: UpComponent },
  { path: 'down', component: DownComponent },
  { path: 'reset', component: ResetComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);



