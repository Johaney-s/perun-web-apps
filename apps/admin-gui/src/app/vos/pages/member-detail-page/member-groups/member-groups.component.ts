import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Group,
  GroupsManagerService,
  Member,
  MembersManagerService,
  Vo,
} from '@perun-web-apps/perun/openapi';
import { TABLE_MEMBER_DETAIL_GROUPS } from '@perun-web-apps/config/table-config';
import { SelectionModel } from '@angular/cdk/collections';
import { getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberGroupDialogComponent } from '../../../../shared/components/dialogs/add-member-group-dialog/add-member-group-dialog.component';
import { RemoveMemberGroupDialogComponent } from '../../../../shared/components/dialogs/remove-member-group-dialog/remove-member-group-dialog.component';
import { GuiAuthResolver } from '@perun-web-apps/perun/services';
import { Urns } from '@perun-web-apps/perun/urns';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-member-groups',
  templateUrl: './member-groups.component.html',
  styleUrls: ['./member-groups.component.scss'],
})
export class MemberGroupsComponent implements OnInit {
  static id = 'MemberGroupsComponent';

  // used for router animation
  @HostBinding('class.router-component') true;

  groups: Group[] = [];
  memberId: number;
  member: Member;
  allGroups: Group[];
  loading: boolean;
  filterValue = '';
  tableId = TABLE_MEMBER_DETAIL_GROUPS;
  selection = new SelectionModel<Group>(true, []);
  addAuth: boolean;
  routeAuth: boolean;
  removeAuth$: Observable<boolean> = this.selection.changed.pipe(
    map((change) =>
      change.source.selected.reduce(
        (acc, grp) =>
          acc && this.authResolver.isAuthorized('removeMember_Member_List<Group>_policy', [grp]),
        true
      )
    ),
    startWith(true)
  );

  constructor(
    private groupsService: GroupsManagerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authResolver: GuiAuthResolver,
    private memberService: MembersManagerService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.parent.params.subscribe((parentParams) => {
      this.memberId = Number(parentParams['memberId']);
      this.memberService.getMemberById(this.memberId).subscribe((member) => {
        this.member = member;
        this.groupsService.getAllGroups(this.member.voId).subscribe((allGroups) => {
          this.allGroups = allGroups;
          this.refreshTable();
        });
      });
    });
  }

  refreshTable(): void {
    this.loading = true;
    this.groupsService
      .getMemberRichGroupsWithAttributesByNames(this.memberId, [
        Urns.MEMBER_DEF_GROUP_EXPIRATION,
        Urns.MEMBER_GROUP_STATUS,
        Urns.MEMBER_GROUP_STATUS_INDIRECT,
      ])
      .subscribe(
        (groups) => {
          this.selection.clear();
          this.groups = groups;
          this.setAuthRights();
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }

  setAuthRights(): void {
    const vo: Vo = {
      id: this.member.voId,
      beanName: 'Vo',
    };

    this.addAuth = this.allGroups.reduce(
      (acc, grp) => acc || this.authResolver.isAuthorized('addMember_Group_Member_policy', [grp]),
      false
    );

    if (this.groups.length !== 0) {
      this.routeAuth = this.authResolver.isAuthorized('getGroupById_int_policy', [
        vo,
        this.groups[0],
      ]);
    }
  }

  addGroup(): void {
    const config = getDefaultDialogConfig();
    config.width = '850px';
    config.data = {
      memberId: this.memberId,
      membersGroups: new Set<number>(this.groups.map((grp) => grp.id)),
      theme: 'member-theme',
    };

    const dialogRef = this.dialog.open(AddMemberGroupDialogComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  removeGroup(): void {
    const config = getDefaultDialogConfig();
    config.width = '650px';
    config.data = {
      memberId: this.memberId,
      groups: this.selection.selected,
      theme: 'member-theme',
    };

    const dialogRef = this.dialog.open(RemoveMemberGroupDialogComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
  }
}
