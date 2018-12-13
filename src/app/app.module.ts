import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenubarModule} from 'primeng/menubar';
import { MenuItem} from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthguardService } from './authguard.service';
import { ApiService } from './api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  component: MainComponent
},
{path: '**',redirectTo:'home',data: {toggleData: true}}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [AuthguardService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
