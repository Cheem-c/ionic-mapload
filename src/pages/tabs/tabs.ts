import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ListPage} from '../list/list';
import {GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ListPage;
  tab5Root = GalleryPage;

  constructor() {

  }
}
