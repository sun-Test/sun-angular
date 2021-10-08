import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TabUsersComponent } from './tab-users/tab-users.component';
import { UsersComponent} from './users/users.component';
import { NaviTreeComponent} from './components/navi-tree/navi-tree.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'users/:acc', component: UsersComponent},
  { path: 'userst01', component: TabUsersComponent},
  { path: 'navitree', component: NaviTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
