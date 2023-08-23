import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorsComponent } from './components/donors/donors.component';

const routes: Routes = [{ path: '', component: DonorsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorsRoutingModule {}
