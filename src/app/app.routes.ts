import { Routes } from '@angular/router';
import { List } from './list/list';
import { Login } from './login/login';
import { Register } from './register/register';
import { Update } from './update/update';
import { Add } from './add/add';

export const routes: Routes = [
  {
    path: '',
    component: List,
  },
  {
    path: 'add',
    component: Add,
    canActivate: [],
  },
  {
    path: 'update/:id',
    component: Update,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
];
