import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HilfetextPageRoutingModule } from './hilfetext-routing.module';

import { HilfetextPage } from './hilfetext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HilfetextPageRoutingModule
  ],
  declarations: [HilfetextPage]
})
export class HilfetextPageModule {}
