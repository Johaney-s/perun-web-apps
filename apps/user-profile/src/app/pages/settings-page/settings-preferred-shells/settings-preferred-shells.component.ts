import { Component, OnInit } from '@angular/core';
import { StoreService } from '@perun-web-apps/perun/services';
import { Attribute, AttributesManagerService } from '@perun-web-apps/perun/openapi';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { RemoveStringValueDialogComponent } from '../../../components/dialogs/remove-string-value-dialog/remove-string-value-dialog.component';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'perun-web-apps-settings-preferred-shells',
  templateUrl: './settings-preferred-shells.component.html',
  styleUrls: ['./settings-preferred-shells.component.scss'],
})
export class SettingsPreferredShellsComponent implements OnInit {
  defaultShells: string[] = ['/bin/bash', '/bin/csh', '/bin/ksh', '/bin/sh', '/bin/zsh'];
  userId: number;
  prefShellsAttribute: Attribute;
  shells: string[] = [];
  removeDialogTitle: string;
  removeDialogDescription: string;
  loading: boolean;

  constructor(
    private store: StoreService,
    private attributesManagerService: AttributesManagerService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {
    translateService
      .get('PREFERRED_SHELLS.REMOVE_DIALOG_DESCRIPTION')
      .subscribe((value: string) => (this.removeDialogDescription = value));
    translateService
      .get('PREFERRED_SHELLS.REMOVE_DIALOG_TITLE')
      .subscribe((value: string) => (this.removeDialogTitle = value));
  }

  ngOnInit(): void {
    this.userId = this.store.getPerunPrincipal().userId;
    this.translateService.onLangChange.subscribe(() => {
      this.translateService
        .get('PREFERRED_SHELLS.REMOVE_DIALOG_DESCRIPTION')
        .subscribe((value: string) => (this.removeDialogDescription = value));
      this.translateService
        .get('PREFERRED_SHELLS.REMOVE_DIALOG_TITLE')
        .subscribe((value: string) => (this.removeDialogTitle = value));
    });
    this.getAttribute();
  }

  addShell(): void {
    this.shells.push('/bin/bash');

    this.prefShellsAttribute.value = this.shells;
    this.attributesManagerService
      .setUserAttribute({
        user: this.userId,
        attribute: this.prefShellsAttribute,
      })
      .subscribe(() => {
        // console.log('done');
      });
  }

  removeShell(i: number): void {
    const config = getDefaultDialogConfig();
    config.width = '600px';
    config.data = {
      valueIndex: i,
      values: [this.shells[i]],
      attribute: this.prefShellsAttribute,
      userId: this.userId,
      title: this.removeDialogTitle,
      description: this.removeDialogDescription,
    };

    const dialogRef = this.dialog.open(RemoveStringValueDialogComponent, config);

    dialogRef.afterClosed().subscribe((sshAdded) => {
      if (sshAdded) {
        this.getAttribute();
      }
    });
  }

  changeValue(): void {
    this.loading = true;
    this.prefShellsAttribute.value = this.shells;
    this.attributesManagerService
      .setUserAttribute({
        user: this.userId,
        attribute: this.prefShellsAttribute,
      })
      .subscribe({
        next: () => {
          this.getAttribute();
        },
        error: () => (this.loading = false),
      });
  }

  private getAttribute(): void {
    this.loading = true;
    this.attributesManagerService
      .getUserAttributeByName(this.userId, 'urn:perun:user:attribute-def:def:preferredShells')
      .subscribe((attribute) => {
        this.prefShellsAttribute = attribute;

        this.shells = (this.prefShellsAttribute?.value as string[]) ?? [];
        this.loading = false;
      });
  }
}
