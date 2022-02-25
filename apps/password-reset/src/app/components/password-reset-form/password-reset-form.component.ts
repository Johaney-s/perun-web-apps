/* eslint-disable @typescript-eslint/unbound-method */
// calling static method of validators (Angular's problem, see https://github.com/typescript-eslint/typescript-eslint/issues/1929)
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestConfigurationService, StoreService } from '@perun-web-apps/perun/services';
import { UsersManagerService } from '@perun-web-apps/perun/openapi';
import { loginAsyncValidator } from '@perun-web-apps/perun/namespace-password-form';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'perun-web-apps-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss'],
})
export class PasswordResetFormComponent implements OnInit {
  @Input()
  mode: string;

  @Input()
  namespace: string;

  @Input()
  login: string;

  @Input()
  token: string;

  @Input()
  authWithoutToken: boolean;

  loading = false;
  success = false;
  language = 'en';
  newPasswdForm: FormGroup;

  constructor(
    private storeService: StoreService,
    private translate: TranslateService,
    private apiRequestConfiguration: ApiRequestConfigurationService,
    private usersService: UsersManagerService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.translate.onLangChange.subscribe((lang) => {
      this.language = lang.lang;
    });
    this.newPasswdForm = this._formBuilder.group(
      {
        passwordCtrl: new FormControl('', Validators.required, [
          loginAsyncValidator(this.namespace, this.usersService, this.apiRequestConfiguration),
        ]),
        passwordAgainCtrl: new FormControl('', Validators.required),
      },
      {
        validators: CustomValidators.passwordMatchValidator,
      }
    );

    this.loading = false;
  }

  onSubmit(): void {
    this.loading = true;
    if (this.authWithoutToken) {
      this.usersService
        .changePasswordForLogin(
          this.login,
          this.namespace,
          this.newPasswdForm.get('passwordCtrl').value as string
        )
        .subscribe(() => {
          this.success = true;
          this.loading = false;
        });
    } else {
      this.usersService
        .changeNonAuthzPasswordByToken(
          this.token,
          this.newPasswdForm.get('passwordCtrl').value as string
        )
        .subscribe(() => {
          this.success = true;
          this.loading = false;
        });
    }
  }
}
