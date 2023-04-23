import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemogardenComponent } from './gardening/demogarden/demogarden.component';
import { GardeningComponent } from './gardening/gardening/gardening.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'gardening', component: GardeningComponent, children: [
      { path: 'demogarden', component: DemogardenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
