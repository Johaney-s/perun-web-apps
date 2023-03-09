import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificatorService } from '@perun-web-apps/perun/services';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {
  AuthzResolverService,
  Facility,
  Group,
  GroupsManagerService,
  RoleManagementRules,
  Vo,
  VosManagerService,
} from '@perun-web-apps/perun/openapi';
import { Role } from '@perun-web-apps/perun/models';
import { TABLE_SELECT_GROUP_MANAGER_DIALOG } from '@perun-web-apps/config/table-config';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

export interface AddGroupManagerDialogData {
  complementaryObject: Vo | Group | Facility;
  availableRoles: RoleManagementRules[];
  theme: string;
  selectedRole: Role;
}

@Component({
  selector: 'app-add-group-manager-dialog',
  templateUrl: './add-group-manager-dialog.component.html',
  styleUrls: ['./add-group-manager-dialog.component.scss'],
})
export class AddGroupManagerDialogComponent implements OnInit {
  title: string;
  searchString = '';
  successMessage: string;

  selection = new SelectionModel<Group>(true, []);
  loading: boolean;
  groups: Group[] = [];
  selected: number;
  vos: Vo[] = [];
  filterValue = '';

  selectedRole: Role;
  filteredOptions: Observable<Vo[]>;
  myControl = new UntypedFormControl();
  firstSearchDone = false;

  availableRoles: RoleManagementRules[];
  theme: string;

  tableId = TABLE_SELECT_GROUP_MANAGER_DIALOG;

  constructor(
    private dialogRef: MatDialogRef<AddGroupManagerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddGroupManagerDialogData,
    private authzService: AuthzResolverService,
    private voService: VosManagerService,
    private groupService: GroupsManagerService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    translate.get('DIALOGS.ADD_GROUPS.TITLE').subscribe((value: string) => (this.title = value));
    translate
      .get('DIALOGS.ADD_GROUPS.SUCCESS')
      .subscribe((value: string) => (this.successMessage = value));
  }

  displayFn(vo?: Vo): string | undefined {
    return vo ? vo.name : null;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.loading = true;
    this.authzService
      .setRoleWithGroupComplementaryObject({
        role: this.selectedRole,
        authorizedGroups: this.selection.selected.map((group) => group.id),
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

  ngOnInit(): void {
    this.loading = true;
    this.availableRoles = this.data.availableRoles;
    this.selectedRole = this.data.selectedRole;
    this.theme = this.data.theme;
    this.voService.getMyVos().subscribe({
      next: (vos) => {
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map((value: string) => this._filter(value))
        );

        this.vos = vos;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  showVoGroups(event: MatAutocompleteSelectedEvent): void {
    this.loading = true;
    this.firstSearchDone = true;
    this.groupService.getAllGroups((event.option.value as Vo).id).subscribe({
      next: (groups) => {
        this.groups = groups;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
  }

  private _filter(value: string | Vo): Vo[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
    return this.vos.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
