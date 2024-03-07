import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReceipesComponent } from './all-receipes/all-receipes.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'',component:AllReceipesComponent},
  {path:'single/:id',component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
