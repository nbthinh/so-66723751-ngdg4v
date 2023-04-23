import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardeningComponent } from './gardening/gardening.component';
import { DemogardenComponent } from './demogarden/demogarden.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GardeningComponent, DemogardenComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[GardeningComponent, DemogardenComponent]

})
export class GardeningModule { }
