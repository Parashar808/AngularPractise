import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InlineStyleComponentComponent } from './inline-style-component/inline-style-component.component';
import { InlineTemplateComponentComponent } from './inline-template-component/inline-template-component.component';
import { BothInlineComponent } from './both-inline/both-inline.component';
import {UserAuthModule} from './user-auth/user-auth.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InlineStyleComponentComponent,
    InlineTemplateComponentComponent,
    BothInlineComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
