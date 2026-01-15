import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GespeicherteErgebnissePage } from './gespeicherte-ergebnisse.page';

const routes: Routes = [
  {
    path: '',
    component: GespeicherteErgebnissePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GespeicherteErgebnissePageRoutingModule {}
