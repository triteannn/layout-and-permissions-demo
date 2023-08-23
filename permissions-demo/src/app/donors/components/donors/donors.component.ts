import { Component } from '@angular/core';
import { USER_PERMISSIONS } from 'src/app/core/authorization/permissions';
import { AuthorizationService } from 'src/app/core/authorization/services/authorization.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss'],
})
export class DonorsComponent {
  tableColumns = [
    'id',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
    'name',
  ];
  mockData = [
    { id: 1, name: 'Tudor' },
    { id: 2, name: 'Tudor' },
    { id: 3, name: 'Tudor' },
    { id: 4, name: 'Tudor' },
    { id: 5, name: 'Tudor' },
    { id: 6, name: 'Tudor' },
    { id: 7, name: 'Tudor' },
    { id: 8, name: 'Tudor' },
    { id: 9, name: 'Tudor' },
    { id: 10, name: 'Tudor' },
    { id: 11, name: 'Tudor' },
    { id: 12, name: 'Tudor' },
  ];

  constructor(private authorizationService: AuthorizationService) {}

  onAddClick(): void {
    USER_PERMISSIONS.next(['DONORS_ADD']);
    this.authorizationService.getAllPermissions().subscribe();
  }
}
