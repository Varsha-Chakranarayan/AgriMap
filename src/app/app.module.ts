import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerMapComponent } from './farmer-map/farmer-map/farmer-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerMapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
