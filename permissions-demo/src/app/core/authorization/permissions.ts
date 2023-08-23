import { BehaviorSubject } from 'rxjs';

export const USER_PERMISSIONS = new BehaviorSubject<string[]>([
  'DONORS_READ',
  'DONORS_ADD',
]);
