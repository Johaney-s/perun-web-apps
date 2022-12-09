import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SideMenuItem } from '../side-menu.component';
import { openClose, rollInOut } from '@perun-web-apps/perun/animations';
import { MatSidenav } from '@angular/material/sidenav';
import { StoreService } from '@perun-web-apps/perun/services';
import { QueryParamsRouterService } from '../../query-params-router.service';

@Component({
  selector: 'app-side-menu-root-item',
  templateUrl: './side-menu-root-item.component.html',
  styleUrls: ['./side-menu-root-item.component.scss'],
  animations: [openClose, rollInOut],
})
export class SideMenuRootItemComponent implements OnInit, OnChanges {
  @Input()
  item: SideMenuItem;
  @Input()
  index: number;
  @Input()
  showOpen: boolean;
  @Input()
  id = '';
  @ViewChild('collapse') collapseDiv: ElementRef;
  @Input()
  sideNav: MatSidenav;

  expanded = false;
  linkBgColor = this.store.getProperty('theme').sidemenu_submenu_bg_color;
  linkTextColor = this.store.getProperty('theme').sidemenu_submenu_text_color;
  currentUrl: string;

  constructor(
    private router: Router,
    private store: StoreService,
    private queryParamsRouter: QueryParamsRouterService
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  ngOnInit(): void {
    this.expanded = this.showOpen;
  }

  ngOnChanges(): void {
    this.expanded = this.showOpen;
  }

  toggle(): void {
    if (this.item.baseLink !== undefined) {
      this.navigate(this.item.baseLink);
    } else {
      this.expanded = !this.expanded;
    }
  }

  isActive(currentUrl: string, regexValue: string): boolean {
    const regexp = new RegExp(regexValue);

    return regexp.test(currentUrl);
  }

  getBgClass(): string {
    if (this.item.baseColorClass) {
      return this.isActive(this.currentUrl, this.item.baseColorClassRegex)
        ? this.item.colorClass
        : this.item.baseColorClass;
    } else {
      return this.item.colorClass;
    }
  }

  navigate(url: string[]): void {
    if (this.sideNav.mode === 'over') {
      void this.sideNav.close().then(() => this.queryParamsRouter.navigate(url));
    } else {
      this.queryParamsRouter.navigate(url);
    }
  }
}
