import { Component } from '@angular/core';

import { MedboxPage } from '../medbox/medbox';
import { HistoryPage } from '../history/history';
import { SearchPage } from '../search/search';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MedboxPage;
  tab2Root: any = HistoryPage;
  tab3Root: any = SearchPage;
  tab4Root: any = SettingPage;


  constructor() {

  }
}
