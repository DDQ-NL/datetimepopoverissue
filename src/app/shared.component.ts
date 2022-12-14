import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [
    DatepickerComponent
  ],
  exports: [
    DatepickerComponent
  ],
})

export class SharedComponent{}

