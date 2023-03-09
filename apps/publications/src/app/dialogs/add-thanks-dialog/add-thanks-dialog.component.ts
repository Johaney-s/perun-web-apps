import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificatorService, StoreService } from '@perun-web-apps/perun/services';
import {
  CabinetManagerService,
  Owner,
  OwnersManagerService,
  PublicationForGUI,
} from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import { TABLE_ADD_THANKS_DIALOG } from '@perun-web-apps/config/table-config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'perun-web-apps-add-thanks-dialog',
  templateUrl: './add-thanks-dialog.component.html',
  styleUrls: ['./add-thanks-dialog.component.scss'],
})
export class AddThanksDialogComponent implements OnInit {
  loading: boolean;
  owners: Owner[] = [];
  selected = new SelectionModel<Owner>(true, []);
  filterValue: string;
  tableId = TABLE_ADD_THANKS_DIALOG;

  constructor(
    private dialogRef: MatDialogRef<AddThanksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PublicationForGUI,
    private ownersManagerService: OwnersManagerService,
    private storeService: StoreService,
    private notificator: NotificatorService,
    private translate: TranslateService,
    private cabinetManagerService: CabinetManagerService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const allowedOwners = this.storeService.getProperty('allowed_owners_for_thanks');
    this.ownersManagerService.getAllOwners().subscribe((owners) => {
      if (allowedOwners.length !== 0) {
        this.owners = owners.filter((item) => allowedOwners.includes(String(item.id)));
      } else {
        this.owners = owners;
      }
      this.owners = this.owners.filter(
        (item) => !this.data.thanks.map((thanks) => thanks.ownerId).includes(item.id)
      );

      this.loading = false;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.loading = true;
    if (this.selected.selected.length === 0) {
      this.translate.get('DIALOGS.ADD_THANKS.SUCCESS').subscribe((success: string) => {
        this.notificator.showSuccess(success);
        this.dialogRef.close(true);
      });
    } else {
      this.cabinetManagerService
        .createThanks({
          thanks: {
            publicationId: this.data.id,
            ownerId: this.selected.selected.pop().id,
            createdBy: this.storeService.getPerunPrincipal().actor,
            createdByUid: this.storeService.getPerunPrincipal().userId,
            createdDate: Date.now().toString(),
            id: 0,
            beanName: 'Thanks',
          },
        })
        .subscribe(
          () => {
            this.onSubmit();
          },
          () => (this.loading = false)
        );
    }
  }
}
