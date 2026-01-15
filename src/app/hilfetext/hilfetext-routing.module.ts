import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HilfetextPage } from './hilfetext.page';

const routes: Routes = [
  {
    path: '',
    component: HilfetextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HilfetextPageRoutingModule {}
