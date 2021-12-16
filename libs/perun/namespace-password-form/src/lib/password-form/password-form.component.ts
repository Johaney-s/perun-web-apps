import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImmediateStateMatcher } from '../perun-namespace-password-form';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from '@perun-web-apps/perun/services';
import { UsersManagerService } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'perun-web-apps-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit, OnChanges {

  @Input()
  formGroup: FormGroup;

  @Input()
  passwordRequired = true;

  @Input()
  tooltipPwdViaEmail = false;

  @Input()
  namespace: string;

  @Input()
  multiLanguage = false;

  @Input()
  language = 'en';

  allPasswordRequirements = this.store.get('password_requirements_help');
  passwordRequirement: string = null;
  showNewPassword = false;
  showPasswordConfirm = false;

  passwordStateMatcher = new ImmediateStateMatcher();

  constructor(private translator: TranslateService,
              private usersManagerService: UsersManagerService,
              private store: StoreService) { }

  ngOnInit(): void {
    if (window.location.href.includes("/profile")) {
      this.usersManagerService.getRichUserWithAttributes(this.store.getPerunPrincipal().userId).subscribe(richUser => {
        const languageAttribute = richUser.userAttributes.find(att => att.friendlyName === 'preferredLanguage');
        this.language = languageAttribute && languageAttribute.value ? languageAttribute.value.toString() : 'en';

        if (this.language !== 'en') {
          this.allPasswordRequirements = this.store.get(`password_requirements_help_${this.language}`);
        }

        this.changeHelp();
      });
    } else {
      this.changeHelp();
    }
  }

  ngOnChanges() {
    if (this.language !== 'en') {
      this.allPasswordRequirements = this.store.get(`password_requirements_help_${this.language}`);
    } else {
      this.allPasswordRequirements = this.store.get('password_requirements_help');
    }

    this.changeHelp();
  }

  getPasswordDisabledTooltip(): string {
    if (this.tooltipPwdViaEmail) {
      return this.translator.instant('SHARED_LIB.PERUN.COMPONENTS.PASSWORD_FORM_FIELD.TOOLTIP_PASSWORD_VIA_EMAIL');
    } else {
      return this.translator.instant('SHARED_LIB.PERUN.COMPONENTS.PASSWORD_FORM_FIELD.TOOLTIP_PASSWORD_DISABLED');
    }
  }

  getErrorTooltip(): string {
    let err = this.formGroup.get('passwordCtrl').getError('backendError');
    if (err) {
      err = err.replace(':null', '');
    }
    return err;
  }

  changeHelp() {
    this.passwordRequirement = this.allPasswordRequirements.find(passReq => passReq.split(":")[0] === this.namespace);
    if (this.passwordRequirement === undefined) {
      this.passwordRequirement = this.allPasswordRequirements.find(passReq => passReq.split(":")[0] === "default").split(/:(.+)/)[1];
    } else {
      this.passwordRequirement = this.passwordRequirement.split(/:(.+)/)[1];
    }
  }

}
