import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthGuard } from 'src/app/helpers/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent,  },
    { path: 'login', component: LoginComponent,  },
    { path: 'add', component:  FormComponent ,   canActivate: [AuthGuard] },
    { path: 'users', component: UserListComponent , canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
 

}
