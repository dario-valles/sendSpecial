import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListModuleComponent } from './list-models/list-models.component';
import { ListMaterialComponent } from './list-material/list-material.component';
import { SelectedOptionsComponent } from './selected-options/selected-options.component';

const routes: Routes = [
  { path: 'models', component: ListModuleComponent },
  { path: 'materials', component: ListMaterialComponent },
  { path: 'my-selection', component: SelectedOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
