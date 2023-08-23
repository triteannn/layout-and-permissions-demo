import { NgModule } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [NavbarComponent, MatToolbarModule],
  exports: [NavbarComponent],
  declarations: [HomeComponent],
})
export class CoreModule {}
