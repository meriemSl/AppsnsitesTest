import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { AlertService } from './services/alert.service';
import { FormService } from './services/form.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { UserListComponent } from './pages/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      LoginService,
      AlertService,
      FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
