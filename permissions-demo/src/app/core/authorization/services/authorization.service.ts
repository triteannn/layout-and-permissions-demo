import { Injectable } from '@angular/core';
import {
  delay,
  Observable,
  tap,
  take,
  AsyncSubject,
  BehaviorSubject,
} from 'rxjs';
import { USER_PERMISSIONS } from '../permissions';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userPermissions$: Observable<string[]>;
  private _userPermissionsSubject$ = new BehaviorSubject<string[]>([]);

  constructor() {
    this.userPermissions$ = this._userPermissionsSubject$.asObservable();
  }

  getAllPermissions(): Observable<string[]> {
    return USER_PERMISSIONS.pipe(
      delay(300),
      tap((permissions) => {
        this._userPermissionsSubject$.next(permissions);
      }),
      take(1)
    );
  }

  hasPermissions(permission: string): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this._userPermissionsSubject$.getValue().includes(permission));
    });
  }
}
