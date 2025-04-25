import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerMapComponent } from './farmer-map/farmer-map/farmer-map.component';

const routes: Routes = [

  { path: 'map', component: FarmerMapComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' }, // optional: redirect root to map
  // add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
