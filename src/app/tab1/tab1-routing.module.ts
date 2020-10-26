import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
 imports: [//RouterModule.forChild(routes)],
  RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'worker', loadChildren: '../worker/worker.module#WorkerPageModule' },
    ])],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
