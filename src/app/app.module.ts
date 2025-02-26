import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS, /* other http imports */ } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { CalculateComponent } from './user/calculate/calculate.component';
import { FindRootComponent } from './user/calculate/find-root/find-root.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { AdminComponent } from './admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompaniesComponent } from './admin/view-companies/view-companies.component';
import { EditCompanyComponent } from './admin/view-companies/edit-company/edit-company.component';
import { AddTransportComponent } from './admin/add-transport/add-transport.component';
import { ViewTransportsComponent } from './admin/view-transports/view-transports.component';
import { ViewMapsComponent } from './admin/view-maps/view-maps.component';

import { AuthInterceptor } from './core/middleware';
import { RegistrationComponent } from './registration/registration.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule, ɵBrowserAnimationBuilder } from '@angular/platform-browser/animations';
import { ParentComponent } from './admin/parent/parent.component';
import { ChildComponent } from './admin/child/child.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuard} from "./core/auth";
import {AuthService} from "./core/services";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    UserComponent,
    CalculateComponent,
    FindRootComponent,
    UserOrderComponent,
    AdminComponent,
    AddCompanyComponent,
    ViewCompaniesComponent,
    EditCompanyComponent,
    AddTransportComponent,
    ViewTransportsComponent,
    ViewMapsComponent,
    RegistrationComponent,
    AddUserComponent,
    ViewUsersComponent,
    ItemComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
  ],
  entryComponents: [ChildComponent],
  imports: [
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
