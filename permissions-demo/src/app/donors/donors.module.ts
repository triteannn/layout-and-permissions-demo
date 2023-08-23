import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorsRoutingModule } from './donors-routing.module';
import { DonorsComponent } from './components/donors/donors.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HasPermissionsDirective } from '../core/authorization/directives/has-permissions.directive';

@NgModule({
  declarations: [DonorsComponent],
  imports: [
    DonorsRoutingModule,
    MatTableModule,
    MatButtonModule,
    HasPermissionsDirective,
  ],
})
export class DonorsModule {}
