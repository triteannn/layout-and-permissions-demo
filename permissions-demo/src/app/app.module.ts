import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonorsModule } from './donors/donors.module';
import { CoreModule } from './core/core.module';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthorizationService } from './core/authorization/services/authorization.service';
import { take, Observable } from 'rxjs';
import { APP_INITIALIZER } from '@angular/core';

function initializeAppFactory(
  authorizationService: AuthorizationService
): () => Observable<string[]> {
  return () => authorizationService.getAllPermissions().pipe(take(1));
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    DonorsModule,
    AsyncPipe,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthorizationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
