import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentTableComponent } from './content/content-table/content-table.component';

const routes: Routes = [{ path: '', component: ContentTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
