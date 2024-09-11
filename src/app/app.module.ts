import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterLink, RouterModule } from '@angular/router';
import * as AOS from 'aos'
@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,

  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterLink,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
