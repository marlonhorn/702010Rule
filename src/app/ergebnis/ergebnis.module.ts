import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErgebnisPageRoutingModule } from './ergebnis-routing.module';

import { ErgebnisPage } from './ergebnis.page';
import { RoundPipe } from '../round.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErgebnisPageRoutingModule,
    RoundPipe
  ],
  declarations: [ErgebnisPage]
})
export class ErgebnisPageModule {}
