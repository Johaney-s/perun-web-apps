import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CreateGroupDialogComponent } from './components/dialogs/create-group-dialog/create-group-dialog.component';
import { InviteMemberDialogComponent } from './components/dialogs/invite-member-dialog/invite-member-dialog.component';
import { DeleteGroupDialogComponent } from './components/dialogs/delete-group-dialog/delete-group-dialog.component';
import { SettingsToggleItemComponent } from './components/settings-toggle-item/settings-toggle-item.component';
import { ApplicationStatePipe } from './pipes/application-state.pipe';
import { AttributeTypeCleanPipe } from './pipes/attribute-type-clean.pipe';
import { NameSpaceToDefPipe } from './pipes/name-space-to-def.pipe';
import { ApplicationReSendNotificationDialogComponent } from './components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component';
import { ApplicationRejectDialogComponent } from './components/dialogs/application-reject-dialog/application-reject-dialog.component';
import { AnyToStringPipe } from './pipes/any-to-string.pipe';
import { DeleteAttributeDialogComponent } from './components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component';
import { RemoveMembersDialogComponent } from './components/dialogs/remove-members-dialog/remove-members-dialog.component';
import { SideMenuRootItemComponent } from './side-menu/side-menu-root-item/side-menu-root-item.component';
import { DebuggerPageComponent } from './debugger-page/debugger-page.component';
import { RemoveResourceDialogComponent } from './components/dialogs/remove-resource-dialog/remove-resource-dialog.component';
import { AddManagerDialogComponent } from './components/dialogs/add-manager-dialog/add-manager-dialog.component';
import { RemoveManagerDialogComponent } from './components/dialogs/remove-manager-dialog/remove-manager-dialog.component';
import { AddGroupManagerDialogComponent } from './components/dialogs/add-group-manager-dialog/add-group-manager-dialog.component';
import { RemoveGroupManagerDialogComponent } from './components/dialogs/remove-group-manager-dialog/remove-group-manager-dialog.component';
import { ApplicationFormItemTypePipe } from './pipes/application-form-item-type.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UpdateApplicationFormDialogComponent } from './components/dialogs/update-application-form-dialog/update-application-form-dialog.component';
import { DeleteApplicationFormItemDialogComponent } from './components/dialogs/delete-application-form-item-dialog/delete-application-form-item-dialog.component';
import { ApplicationFormCopyItemsDialogComponent } from './components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component';
import { AddApplicationFormItemDialogComponent } from './components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component';
import { EditApplicationFormItemDialogComponent } from './components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component';
import { AddMemberDialogComponent } from './components/dialogs/add-member-dialog/add-member-dialog.component';
import { MembersCandidatesListComponent } from './components/members-candidates-list/members-candidates-list.component';
import { CreateResourceTagDialogComponent } from './components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component';
import { DeleteResourceTagDialogComponent } from './components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component';
import { MoveGroupDialogComponent } from './components/dialogs/move-group-dialog/move-group-dialog.component';
import { ManagersPageComponent } from './components/managers-page/managers-page.component';
import { DeleteNotificationDialogComponent } from './components/dialogs/delete-notification-dialog/delete-notification-dialog.component';
import { EditEmailFooterDialogComponent } from './components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component';
import { AddEditNotificationDialogComponent } from './components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TagSectionComponent } from './components/dialogs/add-edit-notification-dialog/tag-section/tag-section.component';
import { TagBarComponent } from './components/dialogs/add-edit-notification-dialog/tag-bar/tag-bar.component';
import { NotificationsCopyMailsDialogComponent } from './components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component';
import { AnimatedRouterOutletComponent } from './components/animated-router-outlet/animated-router-outlet.component';
import { ResourcesTagsListComponent } from './components/resources-tags-list/resources-tags-list.component';
// eslint-disable-next-line max-len
import { DeleteAttributeDefinitionDialogComponent } from './components/dialogs/delete-attribute-definition-dialog/delete-attribute-definition-dialog.component';
// eslint-disable-next-line max-len
import { CreateAttributeDefinitionDialogComponent } from './components/dialogs/create-attribute-definition-dialog/create-attribute-definition-dialog.component';
import { UiAlertsModule } from '@perun-web-apps/ui/alerts';
import { UiLoadersModule } from '@perun-web-apps/ui/loaders';
import { EditAttributeDefinitionDialogComponent } from './components/dialogs/edit-attribute-definition-dialog/edit-attribute-definition-dialog.component';
import { EntitylessAttributeKeysListComponent } from './components/entityless-attribute-keys-list/entityless-attribute-keys-list.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { RemoveVoDialogComponent } from './components/dialogs/remove-vo-dialog/remove-vo-dialog.component';
import { CreateVoDialogComponent } from './components/dialogs/create-vo-dialog/create-vo-dialog.component';
import { ExtSourcesListComponent } from './components/ext-sources-list/ext-sources-list.component';
import { AddExtSourceDialogComponent } from './components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component';
import { CreateRelationDialogComponent } from './components/dialogs/create-relation-dialog/create-relation-dialog.component';
import { RemoveRelationDialogComponent } from './components/dialogs/remove-relation-dialog/remove-relation-dialog.component';
import { RemoveGroupFromResourceDialogComponent } from './components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component';
import { AssignGroupToResourceDialogComponent } from './components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component';
import { CreateResourceDialogComponent } from './components/dialogs/create-resource-dialog/create-resource-dialog.component';
import { ExtSourceTypePipe } from './pipes/ext-source-type.pipe';
import { PerunSharedComponentsModule } from '@perun-web-apps/perun/components';
import { ConfigTableConfigModule } from '@perun-web-apps/config/table-config';
import { MemberStatusTooltipPipe, PerunPipesModule } from '@perun-web-apps/perun/pipes';
import { RemoveDestinationDialogComponent } from './components/dialogs/remove-destination-dialog/remove-destination-dialog.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { AddServicesDestinationDialogComponent } from './components/dialogs/add-services-destination-dialog/add-services-destination-dialog.component';
import { AddGroupResourceDialogComponent } from './components/dialogs/add-group-resource-dialog/add-group-resource-dialog.component';
import { RemoveGroupResourceDialogComponent } from './components/dialogs/remove-group-resource-dialog/remove-group-resource-dialog.component';
import { TwoEntityAttributePageComponent } from './components/two-entity-attribute-page/two-entity-attribute-page.component';
import { AttributeImportDialogComponent } from './components/dialogs/attribute-import-dialog/attribute-import-dialog.component';
import { HostsListComponent } from './components/hosts-list/hosts-list.component';
import { BlacklistListComponent } from './components/blacklist-list/blacklist-list.component';
import { SecurityTeamsListComponent } from './components/security-teams-list/security-teams-list.component';
import { AddUserExtSourceDialogComponent } from './components/dialogs/add-user-ext-source-dialog/add-user-ext-source-dialog.component';
import { AddHostDialogComponent } from './components/dialogs/add-host-dialog/add-host-dialog.component';
import { RemoveHostDialogComponent } from './components/dialogs/remove-host-dialog/remove-host-dialog.component';
import { AddFacilityOwnerDialogComponent } from './components/dialogs/add-facility-owner-dialog/add-facility-owner-dialog.component';
import { RemoveFacilityOwnerDialogComponent } from './components/dialogs/remove-facility-owner-dialog/remove-facility-owner-dialog.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CreateEditServiceDialogComponent } from './components/dialogs/create-edit-service-dialog/create-edit-service-dialog.component';
import { DeleteServiceDialogComponent } from './components/dialogs/delete-service-dialog/delete-service-dialog.component';
import { AddMemberToResourceDialogComponent } from './components/dialogs/add-member-to-resource-dialog/add-member-to-resource-dialog.component';
import { CreateFacilityDialogComponent } from './components/dialogs/create-facility-dialog/create-facility-dialog.component';
import { DeleteFacilityDialogComponent } from './components/dialogs/delete-facility-dialog/delete-facility-dialog.component';
import { IdentityDetailComponent } from './components/identity-detail/identity-detail.component';
import { AssignServiceToResourceDialogComponent } from './components/dialogs/assign-service-to-resource-dialog/assign-service-to-resource-dialog.component';
import { RemoveServiceFromResourceDialogComponent } from './components/dialogs/remove-service-from-resource-dialog/remove-service-from-resource-dialog.component';
import { AddMemberGroupDialogComponent } from './components/dialogs/add-member-group-dialog/add-member-group-dialog.component';
import { RemoveMemberGroupDialogComponent } from './components/dialogs/remove-member-group-dialog/remove-member-group-dialog.component';
import { AddRequiredAttributesDialogComponent } from './components/dialogs/add-required-attributes-dialog/add-required-attributes-dialog.component';
import { RemoveRequiredAttributesDialogComponent } from './components/dialogs/remove-required-attributes-dialog/remove-required-attributes-dialog.component';
import { AttrDefListComponent } from './components/attr-def-list/attr-def-list.component';
import { ConnectIdentityDialogComponent } from './components/dialogs/connect-identity-dialog/connect-identity-dialog.component';
import { DisconnectIdentityDialogComponent } from './components/dialogs/disconnect-identity-dialog/disconnect-identity-dialog.component';
import { EditUserDialogComponent } from './components/dialogs/edit-user-dialog/edit-user-dialog.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DeleteTaskResultDialogComponent } from './components/dialogs/delete-task-result-dialog/delete-task-result-dialog.component';
import { EditApplicationFormItemDataDialogComponent } from './components/dialogs/edit-application-form-item-data-dialog/edit-application-form-item-data-dialog.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateSponsoredMemberDialogComponent } from './components/dialogs/create-sponsored-member-dialog/create-sponsored-member-dialog.component';
import { GenerateSponsoredMembersDialogComponent } from './components/dialogs/generate-sponsored-members-dialog/generate-sponsored-members-dialog.component';
import { SponsoredMembersListComponent } from './components/sponsored-members-list/sponsored-members-list.component';
import { EditMemberSponsorsDialogComponent } from './components/dialogs/edit-member-sponsors-dialog/edit-member-sponsors-dialog.component';
import { CreateAttributeDialogComponent } from './components/dialogs/create-attribute-dialog/create-attribute-dialog.component';
import { AttributeFriendlyNamePipe } from './pipes/attribute-friendly-name.pipe';
import { PasswordResetRequestDialogComponent } from './components/dialogs/password-reset-request-dialog/password-reset-request-dialog.component';
import { NewVersionDialogComponent } from './components/dialogs/new-version-dialog/new-version-dialog.component';
import { SponsorExistingMemberDialogComponent } from './components/dialogs/sponsor-existing-member-dialog/sponsor-existing-member-dialog.component';
import { DeleteServiceFromFacilityComponent } from './components/dialogs/delete-service-from-facility/delete-service-from-facility.component';
import { DeleteTaskDialogComponent } from './components/dialogs/delete-task-dialog/delete-task-dialog.component';
import { RemoveExtSourceDialogComponent } from './components/dialogs/remove-ext-source-dialog/remove-ext-source-dialog.component';
import { AddOwnerDialogComponent } from './components/add-owner-dialog/add-owner-dialog.component';
import { DeleteOwnerDialogComponent } from './components/delete-owner-dialog/delete-owner-dialog.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { ApplicationFormItemDisabledPipe } from './pipes/application-form-item-disabled.pipe';
import { ApplicationFormItemHiddenPipe } from './pipes/application-form-item-hidden.pipe';
import { MatListModule } from '@angular/material/list';
import { EditApplicationFormItemLineComponent } from './components/dialogs/edit-application-form-item-dialog/edit-application-form-item-line/edit-application-form-item-line.component';
import { AddGroupToRegistrationComponent } from './components/dialogs/add-group-to-registration/add-group-to-registration.component';
import { OneEntityAttributePageComponent } from './components/one-entity-attribute-page/one-entity-attribute-page.component';
import { PerunUtilsModule } from '@perun-web-apps/perun/utils';
import { AddResourceTagToResourceDialogComponent } from './components/dialogs/add-resource-tag-to-resource-dialog/add-resource-tag-to-resource-dialog.component';
import { CreateServiceMemberDialogComponent } from './components/create-service-member-dialog/create-service-member-dialog.component';
import { PerunNamespacePasswordFormModule } from '@perun-web-apps/perun/namespace-password-form';
import { AuditMessagesListComponent } from './components/audit-messages-list/audit-messages-list.component';
import { AuditMessageDetailDialogComponent } from './components/dialogs/audit-message-detail-dialog/audit-message-detail-dialog.component';
import { ParseEventNamePipe } from './pipes/parse-event-name.pipe';
import { ConsentHubsListComponent } from './components/consent-hubs-list/consent-hubs-list.component';
import { EditEnforceConsentsDialogComponent } from './components/dialogs/edit-enforce-consents-dialog/edit-enforce-consents-dialog.component';
import { ConsentRelatedAttributePipe } from './pipes/consent-related-attribute.pipe';
import { MemberTypePipe } from './pipes/member-type.pipe';
import { PerunDialogsModule } from '@perun-web-apps/perun/dialogs';
import { AddGroupHierarchicalIncludeDialogComponent } from './components/dialogs/add-group-hierarchical-include-dialog/add-group-hierarchical-include-dialog.component';
import { DisabledCandidatePipe } from './pipes/disabled-candidate.pipe';
import { LoginForNamespaceComponent } from './components/login-for-namespace/login-for-namespace.component';
import { SetLoginDialogComponent } from './components/set-login-dialog/set-login-dialog.component';
import { LoginPasswordFormWithGenerateOptionComponent } from './components/login-password-form-with-generate-option/login-password-form-with-generate-option.component';
import { RolesPageComponent } from './components/roles-list/roles-page.component';
import { ChooseSponsorComponent } from './components/choose-sponsor/choose-sponsor.component';
import { AddRoleDialogComponent } from './components/dialogs/add-role-dialog/add-role-dialog.component';
import { AddUserRoleDialogComponent } from './components/dialogs/add-role-dialog/add-user-role-dialog/add-user-role-dialog.component';
import { AddGroupRoleDialogComponent } from './components/dialogs/add-role-dialog/add-group-role-dialog/add-group-role-dialog.component';
import { BulkInviteMembersDialogComponent } from './components/dialogs/bulk-invite-members-dialog/bulk-invite-members-dialog.component';
import { AssignGroupsSponsoredMembersComponent } from './components/assign-groups-sponsored-members/assign-groups-sponsored-members-component';
import { AddVoBanDialogComponent } from './components/dialogs/add-vo-ban-dialog/add-vo-ban-dialog.component';
import { AddBanDialogComponent } from './components/dialogs/add-ban-dialog/add-ban-dialog.component';
import { AddResourceBanDialogComponent } from './components/dialogs/add-resource-ban-dialog/add-resource-ban-dialog.component';
import { AddFacilityBanDialogComponent } from './components/dialogs/add-facility-ban-dialog/add-facility-ban-dialog.component';
import { UpdateBanDialogComponent } from './components/dialogs/update-ban-dialog/update-ban-dialog.component';
import { UpdateVoBanDialogComponent } from './components/dialogs/update-vo-ban-dialog/update-vo-ban-dialog.component';
import { UpdateResourceBanDialogComponent } from './components/dialogs/update-resource-ban-dialog/update-resource-ban-dialog.component';
import { UpdateFacilityBanDialogComponent } from './components/dialogs/update-facility-ban-dialog/update-facility-ban-dialog.component';
import { CopyMembersDialogComponent } from './components/dialogs/copy-members-dialog/copy-members-dialog-component';
import { ApplicationsListColumnsChangeDialogComponent } from './components/dialogs/applications-list-columns-change-dialog/applications-list-columns-change-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    TranslateModule.forChild({}),
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCardModule,
    MatStepperModule,
    DragDropModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    ScrollingModule,
    UiAlertsModule,
    UiLoadersModule,
    MatBadgeModule,
    PerunSharedComponentsModule,
    ConfigTableConfigModule,
    PerunPipesModule,
    NgxMatSelectSearchModule,
    MatListModule,
    PerunUtilsModule,
    PerunNamespacePasswordFormModule,
    PerunDialogsModule,
  ],
  exports: [
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    SideMenuComponent,
    MatSidenavModule,
    TranslateModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatCardModule,
    MatStepperModule,
    SettingsToggleItemComponent,
    MatRippleModule,
    ApplicationStatePipe,
    MatPaginatorModule,
    AttributeTypeCleanPipe,
    NameSpaceToDefPipe,
    ApplicationFormItemTypePipe,
    DragDropModule,
    RemoveManagerDialogComponent,
    AddManagerDialogComponent,
    AddGroupManagerDialogComponent,
    RemoveGroupManagerDialogComponent,
    AnyToStringPipe,
    AddMemberDialogComponent,
    MembersCandidatesListComponent,
    MatChipsModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    ScrollingModule,
    ManagersPageComponent,
    ScrollingModule,
    ScrollingModule,
    AnimatedRouterOutletComponent,
    ResourcesTagsListComponent,
    CreateResourceDialogComponent,
    ExtSourcesListComponent,
    ExtSourceTypePipe,
    ConfigTableConfigModule,
    SideMenuRootItemComponent,
    DestinationListComponent,
    TwoEntityAttributePageComponent,
    HostsListComponent,
    BlacklistListComponent,
    SecurityTeamsListComponent,
    ServicesListComponent,
    AttrDefListComponent,
    MemberStatusTooltipPipe,
    UsersListComponent,
    SponsoredMembersListComponent,
    EditMemberSponsorsDialogComponent,
    CreateAttributeDialogComponent,
    AttributeFriendlyNamePipe,
    StatisticsCardComponent,
    OneEntityAttributePageComponent,
    AuditMessagesListComponent,
    ConsentHubsListComponent,
    RolesPageComponent,
    AddVoBanDialogComponent,
  ],
  declarations: [
    SideMenuComponent,
    SideMenuItemComponent,
    CreateGroupDialogComponent,
    InviteMemberDialogComponent,
    DeleteGroupDialogComponent,
    SettingsToggleItemComponent,
    ApplicationStatePipe,
    AttributeTypeCleanPipe,
    NameSpaceToDefPipe,
    ApplicationReSendNotificationDialogComponent,
    ApplicationRejectDialogComponent,
    RemoveMembersDialogComponent,
    DebuggerPageComponent,
    RemoveResourceDialogComponent,
    AddManagerDialogComponent,
    RemoveManagerDialogComponent,
    AddGroupManagerDialogComponent,
    RemoveGroupManagerDialogComponent,
    ApplicationFormItemTypePipe,
    UpdateApplicationFormDialogComponent,
    DeleteApplicationFormItemDialogComponent,
    ApplicationFormCopyItemsDialogComponent,
    AddApplicationFormItemDialogComponent,
    EditApplicationFormItemDialogComponent,
    SideMenuRootItemComponent,
    AnyToStringPipe,
    DeleteAttributeDialogComponent,
    AddMemberDialogComponent,
    MembersCandidatesListComponent,
    CreateResourceTagDialogComponent,
    DeleteResourceTagDialogComponent,
    MoveGroupDialogComponent,
    DeleteNotificationDialogComponent,
    EditEmailFooterDialogComponent,
    AddEditNotificationDialogComponent,
    TagSectionComponent,
    TagBarComponent,
    NotificationsCopyMailsDialogComponent,
    ManagersPageComponent,
    AnimatedRouterOutletComponent,
    ResourcesTagsListComponent,
    DeleteAttributeDefinitionDialogComponent,
    CreateAttributeDefinitionDialogComponent,
    EditAttributeDefinitionDialogComponent,
    EntitylessAttributeKeysListComponent,
    ServicesListComponent,
    RemoveVoDialogComponent,
    CreateVoDialogComponent,
    CreateRelationDialogComponent,
    RemoveRelationDialogComponent,
    RemoveGroupFromResourceDialogComponent,
    AssignGroupToResourceDialogComponent,
    CreateResourceDialogComponent,
    ExtSourcesListComponent,
    AddExtSourceDialogComponent,
    ExtSourceTypePipe,
    RemoveDestinationDialogComponent,
    DestinationListComponent,
    AddServicesDestinationDialogComponent,
    AddGroupResourceDialogComponent,
    RemoveGroupResourceDialogComponent,
    TwoEntityAttributePageComponent,
    AttributeImportDialogComponent,
    HostsListComponent,
    BlacklistListComponent,
    SecurityTeamsListComponent,
    AddUserExtSourceDialogComponent,
    AddHostDialogComponent,
    RemoveHostDialogComponent,
    AddFacilityOwnerDialogComponent,
    RemoveFacilityOwnerDialogComponent,
    NotFoundPageComponent,
    CreateEditServiceDialogComponent,
    DeleteServiceDialogComponent,
    AddMemberToResourceDialogComponent,
    CreateFacilityDialogComponent,
    DeleteFacilityDialogComponent,
    IdentityDetailComponent,
    AssignServiceToResourceDialogComponent,
    RemoveServiceFromResourceDialogComponent,
    AddMemberGroupDialogComponent,
    RemoveMemberGroupDialogComponent,
    AddRequiredAttributesDialogComponent,
    RemoveRequiredAttributesDialogComponent,
    AttrDefListComponent,
    IdentityDetailComponent,
    ConnectIdentityDialogComponent,
    DisconnectIdentityDialogComponent,
    EditUserDialogComponent,
    DeleteTaskResultDialogComponent,
    EditApplicationFormItemDataDialogComponent,
    UsersListComponent,
    EditUserDialogComponent,
    CreateSponsoredMemberDialogComponent,
    GenerateSponsoredMembersDialogComponent,
    AssignGroupsSponsoredMembersComponent,
    SponsoredMembersListComponent,
    EditMemberSponsorsDialogComponent,
    CreateAttributeDialogComponent,
    AttributeFriendlyNamePipe,
    PasswordResetRequestDialogComponent,
    NewVersionDialogComponent,
    SponsorExistingMemberDialogComponent,
    DeleteServiceFromFacilityComponent,
    RemoveExtSourceDialogComponent,
    DeleteTaskDialogComponent,
    AddOwnerDialogComponent,
    DeleteOwnerDialogComponent,
    StatisticsCardComponent,
    ApplicationFormItemDisabledPipe,
    ApplicationFormItemHiddenPipe,
    EditApplicationFormItemLineComponent,
    AddGroupToRegistrationComponent,
    OneEntityAttributePageComponent,
    AddResourceTagToResourceDialogComponent,
    CreateServiceMemberDialogComponent,
    AuditMessagesListComponent,
    AuditMessageDetailDialogComponent,
    ParseEventNamePipe,
    ConsentHubsListComponent,
    EditEnforceConsentsDialogComponent,
    ConsentRelatedAttributePipe,
    MemberTypePipe,
    AddGroupHierarchicalIncludeDialogComponent,
    DisabledCandidatePipe,
    LoginForNamespaceComponent,
    SetLoginDialogComponent,
    LoginPasswordFormWithGenerateOptionComponent,
    RolesPageComponent,
    ChooseSponsorComponent,
    AddRoleDialogComponent,
    AddUserRoleDialogComponent,
    AddGroupRoleDialogComponent,
    BulkInviteMembersDialogComponent,
    AddVoBanDialogComponent,
    AddBanDialogComponent,
    AddResourceBanDialogComponent,
    AddFacilityBanDialogComponent,
    UpdateBanDialogComponent,
    UpdateVoBanDialogComponent,
    UpdateResourceBanDialogComponent,
    UpdateFacilityBanDialogComponent,
    CopyMembersDialogComponent,
    ApplicationsListColumnsChangeDialogComponent,
  ],
  providers: [AnyToStringPipe, ExtSourceTypePipe, ConsentRelatedAttributePipe],
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'cs']);
  }
}
