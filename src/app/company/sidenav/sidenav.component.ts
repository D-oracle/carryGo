import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

export interface Section {
  title: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;

  ngOnInit(): void {
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item  jdvadakjbaj ${i + 1}`);

  menus: Section[] = [
    {
      title: 'Order History',
      icon: 'history',
      path: '/user/order'
    },
    {
      title: 'Support',
      icon: 'chat',
      path: '/user/support'
    },
    {
      title: 'Support',
      icon: 'chat',
      path: '/user/support'
    }
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
