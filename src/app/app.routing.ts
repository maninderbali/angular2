import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CheckboxComponent} from './checkbox/checkbox.component';
import {HomeComponent} from './home/home.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'checkbox', component: CheckboxComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
