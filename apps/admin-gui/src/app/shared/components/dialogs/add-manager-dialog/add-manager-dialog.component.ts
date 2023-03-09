import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService, StoreService } from '@perun-web-apps/perun/services';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthzResolverService,
  Facility,
  Group,
  RichUser,
  RoleManagementRules,
  UsersManagerService,
  Vo,
} from '@perun-web-apps/perun/openapi';
import { Role } from '@perun-web-apps/perun/models';
import { TABLE_ADD_MANAGER } from '@perun-web-apps/config/table-config';
import { Urns } from '@perun-web-apps/perun/urns';
import { UntypedFormControl, Validators } from '@angular/forms';

export interface AddManagerDialogData {
  complementaryObject: Vo | Group | Facility;
  theme: string;
  availableRoles: RoleManagementRules[];
  selectedRole: Role;
}

@Component({
  selector: 'app-add-manager-dialog',
  templateUrl: './add-manager-dialog.component.html',
  styleUrls: ['./add-manager-dialog.component.scss'],
})
export class AddManagerDialogComponent implements OnInit {
  title: string;
  successMessage: string;
  selection = new SelectionModel<RichUser>(true, []);
  loading: boolean;
  users: RichUser[] = [];
  selectedRole: Role;
  firstSearchDone = false;
  availableRoles: RoleManagementRules[];
  theme: string;
  tableId = TABLE_ADD_MANAGER;
  searchCtrl: UntypedFormControl;

  constructor(
    private dialogRef: MatDialogRef<AddManagerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddManagerDialogData,
    private authzService: AuthzResolverService,
    private usersService: UsersManagerService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    private storeService: StoreService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    translate.get('DIALOGS.ADD_MANAGERS.TITLE').subscribe((value: string) => (this.title = value));
    translate
      .get('DIALOGS.ADD_MANAGERS.SUCCESS')
      .subscribe((value: string) => (this.successMessage = value));
  }

  ngOnInit(): void {
    this.theme = this.data.theme;
    this.availableRoles = this.data.availableRoles;
    this.selectedRole = this.data.selectedRole;
    this.searchCtrl = new UntypedFormControl('', [
      Validators.required,
      Validators.pattern('.*[\\S]+.*'),
    ]);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    this.loading = true;
    this.authzService
      .setRoleWithUserComplementaryObject({
        role: this.selectedRole,
        users: this.selection.selected.map((u) => u.id),
        complementaryObject: this.data.complementaryObject,
      })
      .subscribe({
        next: () => {
          this.notificator.showSuccess(this.successMessage);
          this.loading = false;
          this.dialogRef.close(true);
        },
        error: () => (this.loading = false),
      });
  }

  onSearchByString(): string {
    if (this.searchCtrl.invalid) {
      this.searchCtrl.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.firstSearchDone = true;

    this.selection.clear();

    let attributes = [Urns.USER_DEF_ORGANIZATION, Urns.USER_DEF_PREFERRED_MAIL];
    attributes = attributes.concat(this.storeService.getLoginAttributeNames());

    this.usersService
      .findRichUsersWithAttributes(this.searchCtrl.value as string, attributes)
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
  }
}
