import { Routes } from '@angular/router';
import { Add } from './add/add';
import { Display } from './display/display';
import { Home } from './home/home';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'add', component: Add },
    { path: 'display', component: Display }
    
];
