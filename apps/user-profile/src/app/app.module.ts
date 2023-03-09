import { BrowserModule, Title } from '@angular/platform-browser';
import { APP_INITIALIZER, forwardRef, NgModule, Provider } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { IdentitiesPageComponent } from './pages/identities-page/identities-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { VosPageComponent } from './pages/vos-page/vos-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Configuration, ConfigurationParameters } from '@perun-web-apps/perun/openapi';
import { SettingsOverviewComponent } from './pages/settings-page/settings-overview/settings-overview.component';
import { SettingsPreferredUnixGroupNamesComponent } from './pages/settings-page/settings-preferred-unix-group-names/settings-preferred-unix-group-names.component';
import { SettingsPreferredShellsComponent } from './pages/settings-page/settings-preferred-shells/settings-preferred-shells.component';
import { SettingsAlternativePasswordsComponent } from './pages/settings-page/settings-alternative-passwords/settings-alternative-passwords.component';
import { SettingsSambaPasswordComponent } from './pages/settings-page/settings-samba-password/settings-samba-password.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CustomIconService, StoreService } from '@perun-web-apps/perun/services';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserProfileConfigService } from './services/user-profile-config.service';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PerunSharedComponentsModule } from '@perun-web-apps/perun/components';
import { UiAlertsModule } from '@perun-web-apps/ui/alerts';
import { UiLoadersModule } from '@perun-web-apps/ui/loaders';
import { AddUnixGroupDialogComponent } from './components/dialogs/add-unix-group-dialog/add-unix-group-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { ShowGeneratedPasswordDialogComponent } from './components/dialogs/show-generated-password-dialog/show-generated-password-dialog.component';
import { StringListComponent } from './components/string-list/string-list.component';
import { RemoveAltPasswordDialogComponent } from './components/dialogs/remove-alt-password-dialog/remove-alt-password-dialog.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PerunPipesModule, UserFullNamePipe } from '@perun-web-apps/perun/pipes';
import { MembershipListComponent } from './components/membership-list/membership-list.component';
import { ValidateExpirationPipe } from './pipes/validate-expiration.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { ApiInterceptor } from '@perun-web-apps/perun/services';
import { PERUN_API_SERVICE } from '@perun-web-apps/perun/tokens';
import { ApiService } from '@perun-web-apps/perun/services';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SettingsAuthenticationComponent } from './pages/settings-page/settings-authorization/settings-authentication.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddAuthImgDialogComponent } from './components/dialogs/add-auth-img-dialog/add-auth-img-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { PerunLoginModule } from '@perun-web-apps/perun/login';
import { PerunUtilsModule } from '@perun-web-apps/perun/utils';
import { MatMenuModule } from '@angular/material/menu';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ConsentsPageComponent } from './pages/consents-page/consents-page.component';
import { ConsentRequestComponent } from './pages/consents-page/consent-request/consent-request.component';
import { ConsentsPreviewComponent } from './pages/consents-page/consents-preview/consents-preview.component';
import { SettingsLocalAccountComponent } from './pages/settings-page/settings-local-account/settings-local-account.component';
import { ActivateLocalAccountDialogComponent } from './components/dialogs/activate-local-account-dialog/activate-local-account-dialog.component';
import { PerunNamespacePasswordFormModule } from '@perun-web-apps/perun/namespace-password-form';
import { MfaSettingsComponent } from './pages/settings-page/settings-authorization/mfa-settings/mfa-settings.component';
import { CategoryLabelPipe } from './pipes/category-label.pipe';
import { SettingsMailingListsComponent } from './pages/settings-page/settings-mailing-lists/settings-mailing-lists.component';
import { SettingsDataQuotasComponent } from './pages/settings-page/settings-data-quotas/settings-data-quotas.component';
import { AddAuthTextDialogComponent } from './components/dialogs/add-auth-text-dialog/add-auth-text-dialog.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true,
};

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function apiConfigFactory(store: StoreService): Configuration {
  const params: ConfigurationParameters = {
    basePath: store.getProperty('api_url'),
  };
  return new Configuration(params);
}

const loadConfigs: (appConfig: UserProfileConfigService) => () => Promise<void> =
  (appConfig: UserProfileConfigService) => () =>
    appConfig.initialize();

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    IdentitiesPageComponent,
    GroupsPageComponent,
    VosPageComponent,
    ServicesPageComponent,
    SettingsPageComponent,
    SettingsOverviewComponent,
    SettingsPreferredUnixGroupNamesComponent,
    SettingsPreferredShellsComponent,
    SettingsAlternativePasswordsComponent,
    SettingsSambaPasswordComponent,
    SettingsMailingListsComponent,
    SettingsDataQuotasComponent,
    SideMenuComponent,
    PrivacyPageComponent,
    HomePageComponent,
    AddUnixGroupDialogComponent,
    ShowGeneratedPasswordDialogComponent,
    StringListComponent,
    RemoveAltPasswordDialogComponent,
    MembershipListComponent,
    ValidateExpirationPipe,
    CategoryLabelPipe,
    BreadcrumbsComponent,
    SettingsAuthenticationComponent,
    AddAuthImgDialogComponent,
    ConsentsPageComponent,
    ConsentRequestComponent,
    ConsentsPreviewComponent,
    SettingsLocalAccountComponent,
    ActivateLocalAccountDialogComponent,
    MfaSettingsComponent,
    AddAuthTextDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    PerunSharedComponentsModule,
    UiAlertsModule,
    UiLoadersModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    ClipboardModule,
    PerunPipesModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
    PerunLoginModule,
    PerunUtilsModule,
    MatMenuModule,
    OAuthModule.forRoot(),
    PerunNamespacePasswordFormModule,
  ],
  providers: [
    CustomIconService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigs,
      multi: true,
      deps: [UserProfileConfigService],
    },
    {
      provide: Configuration,
      useFactory: apiConfigFactory,
      deps: [StoreService],
    },
    UserFullNamePipe,
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    {
      provide: PERUN_API_SERVICE,
      useClass: ApiService,
    },
    Title,
    { provide: OAuthStorage, useFactory: (): OAuthStorage => localStorage },
  ],
  exports: [SideMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private customIconService: CustomIconService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.customIconService.registerPerunRefreshIcon();
  }
}
