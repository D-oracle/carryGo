import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';

export interface Sections {
  title: string;
  path: string;
  icon: string;
  submenu: [];
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  menuitem: Sections[] = [
    {
      title: 'Dashboard',
      path: '/company/dashboard',
      icon: 'dashboard_outlined',
      submenu: [
        
      ]
    },
    {
      title: 'Orders',
      path: '/company/Orders',
      icon: 'request_quote',
      submenu: []
    },
    {
      title: 'Staffs',
      path: '/company/staffs',
      icon: 'supervisor_account_outlined',
      submenu: []
    },
    {
      title: 'Riders',
      path: '/company/riders',
      icon: 'motorcycle',
      submenu: []
    },
    {
      title: 'Settings',
      path: '/company/settings',
      icon: 'settings',
      submenu: []
    },
    {
      title: 'Support Ticket',
      path: '/company/ticket',
      icon: 'confirmation_number',
      submenu: []
    },
    {
      title: 'Logout',
      path: '/logout',
      icon: 'logout',
      submenu: []
    },
  ]

  @Input() title: string = '';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
