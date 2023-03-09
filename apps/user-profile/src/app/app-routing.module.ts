import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { IdentitiesPageComponent } from './pages/identities-page/identities-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { VosPageComponent } from './pages/vos-page/vos-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsAlternativePasswordsComponent } from './pages/settings-page/settings-alternative-passwords/settings-alternative-passwords.component';
import { SettingsOverviewComponent } from './pages/settings-page/settings-overview/settings-overview.component';
import { SettingsPreferredShellsComponent } from './pages/settings-page/settings-preferred-shells/settings-preferred-shells.component';
import { SettingsPreferredUnixGroupNamesComponent } from './pages/settings-page/settings-preferred-unix-group-names/settings-preferred-unix-group-names.component';
import { SettingsSambaPasswordComponent } from './pages/settings-page/settings-samba-password/settings-samba-password.component';
import { SettingsSSHKeysComponent } from '@perun-web-apps/perun/components';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PasswordResetComponent } from '@perun-web-apps/perun/components';
import { SettingsAuthenticationComponent } from './pages/settings-page/settings-authorization/settings-authentication.component';
import {
  LoginScreenComponent,
  LoginScreenServiceAccessComponent,
} from '@perun-web-apps/perun/login';
import { ConsentsPageComponent } from './pages/consents-page/consents-page.component';
import { ConsentRequestComponent } from './pages/consents-page/consent-request/consent-request.component';
import { ConsentsPreviewComponent } from './pages/consents-page/consents-preview/consents-preview.component';
import { SettingsLocalAccountComponent } from './pages/settings-page/settings-local-account/settings-local-account.component';
import { SettingsMailingListsComponent } from './pages/settings-page/settings-mailing-lists/settings-mailing-lists.component';
import { SettingsDataQuotasComponent } from './pages/settings-page/settings-data-quotas/settings-data-quotas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'service-access',
    component: LoginScreenServiceAccessComponent,
  },
  {
    path: 'profile',
    component: HomePageComponent,
    data: { breadcrumb: 'MENU_ITEMS.PROFILE' },
    children: [
      {
        path: '',
        component: ProfilePageComponent,
        data: { breadcrumb: 'MENU_ITEMS.PROFILE' },
      },
      {
        path: 'identities',
        component: IdentitiesPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.IDENTITIES' },
      },
      {
        path: 'groups',
        component: GroupsPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.GROUPS' },
      },
      {
        path: 'services',
        component: ServicesPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.SERVICES' },
      },
      {
        path: 'organizations',
        component: VosPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.VOS' },
      },
      {
        path: 'privacy',
        component: PrivacyPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.PRIVACY' },
      },
      {
        path: 'consents',
        component: ConsentsPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.CONSENTS' },
        children: [
          {
            path: '',
            component: ConsentsPreviewComponent,
            data: { breadcrumb: 'MENU_ITEMS.CONSENTS' },
          },
          {
            path: ':consentId',
            component: ConsentRequestComponent,
            data: { breadcrumb: 'MENU_ITEMS.CONSENT_REQUEST' },
          },
        ],
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
        data: { breadcrumb: 'MENU_ITEMS.SETTINGS' },
        children: [
          {
            path: '',
            component: SettingsOverviewComponent,
            data: { breadcrumb: 'MENU_ITEMS.SETTINGS' },
          },
          {
            path: 'altPasswords',
            component: SettingsAlternativePasswordsComponent,
            data: { breadcrumb: 'SETTINGS.ALTERNATIVE_PASSWORDS' },
          },
          {
            path: 'auth',
            component: SettingsAuthenticationComponent,
            data: { breadcrumb: 'SETTINGS.AUTHENTICATION' },
          },
          {
            path: 'dataQuotas',
            component: SettingsDataQuotasComponent,
            data: { breadcrumb: 'SETTINGS.DATA_QUOTAS' },
          },
          {
            path: 'localAccount',
            component: SettingsLocalAccountComponent,
            data: { breadcrumb: 'SETTINGS.LOCAL_ACCOUNT' },
          },
          {
            path: 'mailingLists',
            component: SettingsMailingListsComponent,
            data: { breadcrumb: 'SETTINGS.MAILING_LISTS' },
          },
          {
            path: 'prefShells',
            component: SettingsPreferredShellsComponent,
            data: { breadcrumb: 'SETTINGS.PREFERRED_SHELLS' },
          },
          {
            path: 'prefGroupNames',
            component: SettingsPreferredUnixGroupNamesComponent,
            data: { breadcrumb: 'SETTINGS.PREFERRED_UNIX_GROUP_NAMES' },
          },
          {
            path: 'sambaPassword',
            component: SettingsSambaPasswordComponent,
            data: { breadcrumb: 'SETTINGS.SAMBA_PASSWORD' },
          },
          {
            path: 'sshKeys',
            component: SettingsSSHKeysComponent,
            data: { breadcrumb: 'SETTINGS.SSH_KEYS' },
          },
          {
            path: 'passwordReset',
            component: PasswordResetComponent,
            data: { breadcrumb: 'SETTINGS.PASSWORD_RESET' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
})
export class AppRoutingModule {}
