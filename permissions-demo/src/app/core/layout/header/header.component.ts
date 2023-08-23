import { ChangeDetectorRef, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HasPermissionsDirective } from '../../authorization/directives/has-permissions.directive';
import { AuthorizationService } from '../../authorization/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterLink,
    HasPermissionsDirective,
  ],
  standalone: true,
})
export class HeaderComponent {
  constructor(
    private authorizationService: AuthorizationService,
    private cdr: ChangeDetectorRef
  ) {
    this.authorizationService.userPermissions$.subscribe((permissions) => {
      console.log(permissions);
    });
  }
}
