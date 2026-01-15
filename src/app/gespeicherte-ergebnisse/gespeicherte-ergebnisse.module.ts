import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GespeicherteErgebnissePageRoutingModule } from './gespeicherte-ergebnisse-routing.module';

import { GespeicherteErgebnissePage } from './gespeicherte-ergebnisse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GespeicherteErgebnissePageRoutingModule
  ],
  declarations: [GespeicherteErgebnissePage]
})
export class GespeicherteErgebnissePageModule {}
