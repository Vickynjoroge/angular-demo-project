import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFetchedComponent } from './Component/data-fetched/data-fetched.component';

const routes: Routes = [
  {path: '', component:DataFetchedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
