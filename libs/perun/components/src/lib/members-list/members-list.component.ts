import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Member } from '@perun-web-apps/perun/openapi';
import {
  customDataSourceFilterPredicate,
  customDataSourceSort,
  downloadData,
  getDataForExport,
  getDefaultDialogConfig,
  parseEmail,
  parseFullName,
  parseLogins,
  parseOrganization,
  TABLE_ITEMS_COUNT_OPTIONS,
} from '@perun-web-apps/perun/utils';
import {
  ChangeMemberStatusDialogComponent,
  MemberTreeViewDialogComponent,
} from '@perun-web-apps/perun/dialogs';
import {
  GuiAuthResolver,
  PerunTranslateService,
  TableCheckbox,
} from '@perun-web-apps/perun/services';
import { ActivatedRoute } from '@angular/router';
import { TableWrapperComponent } from '@perun-web-apps/perun/utils';
import { MemberWithConsentStatus } from '@perun-web-apps/perun/models';

@Component({
  selector: 'perun-web-apps-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnChanges, AfterViewInit {
  @ViewChild(TableWrapperComponent, { static: true }) child: TableWrapperComponent;
  @Input() showGroupStatuses: boolean;
  @Input() members: MemberWithConsentStatus[] = [];
  @Input() searchString: string;
  @Input() selection: SelectionModel<MemberWithConsentStatus> =
    new SelectionModel<MemberWithConsentStatus>();
  @Input() displayedColumns: string[] = [
    'checkbox',
    'id',
    'voId',
    'userId',
    'type',
    'fullName',
    'status',
    'groupStatus',
    'sponsored',
    'organization',
    'email',
    'logins',
  ];
  @Input() disableStatusChange = false;
  @Input() disableExpirationChange = false;
  @Input() allowCheckboxDisabled = true;
  @Input() tableId: string;
  @Input() disableRouting = false;
  @Input() filter = '';
  @Output() updateTable = new EventEmitter<boolean>();

  dataSource: MatTableDataSource<MemberWithConsentStatus>;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;
  disabledRouting: boolean;
  groupId: number;

  private sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private authResolver: GuiAuthResolver,
    private tableCheckbox: TableCheckbox,
    private route: ActivatedRoute,
    private translateService: PerunTranslateService
  ) {}

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
  }

  static getFilterDataForColumn(data: MemberWithConsentStatus, column: string): string {
    switch (column) {
      case 'fullName':
        if (data.user) {
          return parseFullName(data.user);
        }
        return '';
      case 'email':
        return parseEmail(data);
      case 'logins':
        return parseLogins(data);
      default:
        return '';
    }
  }

  static getSortDataForColumn(
    data: MemberWithConsentStatus,
    column: string,
    showGroupStatuses: boolean
  ): string {
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'fullName':
        if (data.user) {
          return data.user.lastName ? data.user.lastName : data.user.firstName ?? '';
        }
        return '';
      case 'status':
        return showGroupStatuses ? data.groupStatus : data.status;
      case 'organization':
        return parseOrganization(data);
      case 'email':
        return parseEmail(data);
      case 'consentStatus':
        return data.consent;
      default:
        return '';
    }
  }

  getExportDataForColumn(
    data: MemberWithConsentStatus,
    column: string,
    showGroupStatuses: boolean
  ): string {
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'fullName':
        if (data.user) {
          return parseFullName(data.user);
        }
        return '';
      case 'status':
        return showGroupStatuses ? data.groupStatus : data.status;
      case 'organization':
        return parseOrganization(data);
      case 'email':
        return parseEmail(data);
      case 'logins':
        return parseLogins(data);
      case 'consentStatus':
        return this.translateService.instant(`CONSENTS.STATUS_${data.consent}`);
      default:
        return '';
    }
  }

  getExportDataForColumnFun = (data: MemberWithConsentStatus, column: string): string => {
    return this.getExportDataForColumn(data, column, this.showGroupStatuses);
  };

  getSortDataForColumnFun = (data: MemberWithConsentStatus, column: string): string => {
    return MembersListComponent.getSortDataForColumn(data, column, this.showGroupStatuses);
  };

  exportDisplayedData(format: string): void {
    const start = this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize;
    const end = start + this.dataSource.paginator.pageSize;
    downloadData(
      getDataForExport(
        this.dataSource
          .sortData(this.dataSource.filteredData, this.dataSource.sort)
          .slice(start, end),
        this.displayedColumns,
        this.getExportDataForColumnFun
      ),
      format
    );
  }

  exportAllData(format: string): void {
    downloadData(
      getDataForExport(
        this.dataSource.filteredData,
        this.displayedColumns,
        this.getExportDataForColumnFun
      ),
      format
    );
  }

  setDataSource(): void {
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<MemberWithConsentStatus>();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.child.paginator;
      this.dataSource.filterPredicate = (data: MemberWithConsentStatus, filter: string): boolean =>
        customDataSourceFilterPredicate(
          data,
          filter,
          this.displayedColumns,
          MembersListComponent.getFilterDataForColumn
        );
      this.dataSource.sortData = (
        data: MemberWithConsentStatus[],
        sort: MatSort
      ): MemberWithConsentStatus[] =>
        customDataSourceSort(data, sort, this.getSortDataForColumnFun);
    }
    this.dataSource.filter = this.filter;
    this.dataSource.data = this.members;
  }

  ngAfterViewInit(): void {
    if (!this.authResolver.isPerunAdminOrObserver()) {
      this.displayedColumns = this.displayedColumns.filter((column) => column !== 'id');
    }
  }

  ngOnChanges(): void {
    this.setDataSource();
    this.disabledRouting = this.disableRouting;
    this.route.parent?.params.subscribe((params) => {
      if (params['groupId']) {
        this.groupId = Number(params['groupId']);
      }
    });
  }

  canBeSelected = (member: MemberWithConsentStatus): boolean => member.membershipType === 'DIRECT';

  isAllSelected(): boolean {
    return this.tableCheckbox.isAllSelected<MemberWithConsentStatus>(
      this.selection.selected.length,
      this.dataSource,
      this.canBeSelected
    );
  }

  masterToggle(): void {
    this.tableCheckbox.masterToggle(
      this.isAllSelected(),
      this.selection,
      this.filter,
      this.dataSource,
      this.sort,
      this.child.paginator.pageSize,
      this.child.paginator.pageIndex,
      true,
      this.canBeSelected
    );
  }

  //FIXME: the correct change of status or expiration is implemented in members-dynamic-list
  // now if the status is column between displayedColumns, the "disableStatusChange" attribute is also presented
  // so the status change through the icon on this list isn't used anywhere. If this change should be possible
  // in the future, the same logic as in members-dynamic-list should be used (but for this purpose some additional
  // member attributes have to be presented in MemberWithConsentStatus object - at least "isLifecycleAlterable" attribute)
  changeStatus(event: Event, member: MemberWithConsentStatus): void {
    event.stopPropagation();
    if (!this.disableStatusChange) {
      const config = getDefaultDialogConfig();
      config.width = '500px';
      config.data = { member: member, disableChangeExpiration: this.disableExpirationChange };

      const dialogRef = this.dialog.open(ChangeMemberStatusDialogComponent, config);
      dialogRef.afterClosed().subscribe((success: Member) => {
        if (success) {
          this.updateTable.emit(true);
        }
      });
    }
  }

  viewMemberGroupTree(member: MemberWithConsentStatus): void {
    const config = getDefaultDialogConfig();
    config.width = '800px';
    config.data = { member: member, groupId: this.groupId };

    this.dialog.open(MemberTreeViewDialogComponent, config);
  }
}
