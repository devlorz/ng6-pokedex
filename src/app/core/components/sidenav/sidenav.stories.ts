import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { AppMaterialModule } from './../../../app-material.module';
import { SidenavComponent } from './sidenav.component';

storiesOf('Side Nav', module).add('initial', () => ({
  component: SidenavComponent,
  moduleMetadata: {
    imports: [AppMaterialModule]
  },
  props: {
    homeBtnClick: action('homeBtnClick')
  }
}));
