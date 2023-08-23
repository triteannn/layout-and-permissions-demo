import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Directive({
  selector: '[hasPermissions]',
  standalone: true,
})
export class HasPermissionsDirective implements OnDestroy {
  @Input() set hasPermissions(permission: string) {
    this.updateView(permission);
  }

  isHidden = false;

  private _directiveDestroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) {}

  ngOnDestroy(): void {
    this._directiveDestroy$.next();
    this._directiveDestroy$.complete();
  }

  private updateView(permission: string): void {
    this.authorizationService.userPermissions$
      .pipe(takeUntil(this._directiveDestroy$))
      .subscribe(() => {
        this.authorizationService
          .hasPermissions(permission)
          .then((result: boolean) => {
            if (result && !this.isHidden) {
              this.viewContainerRef.createEmbeddedView(this.templateRef);
              this.isHidden = true;
            } else if (!result && this.isHidden) {
              this.viewContainerRef.clear();
              this.isHidden = false;
            }
          });
      });
  }
}
