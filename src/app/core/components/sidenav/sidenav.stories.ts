import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import {
  MatListModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

storiesOf('Side Nav', module).add('initial', () => ({
  component: SidenavComponent,
  moduleMetadata: {
    imports: [MatListModule, MatButtonModule, MatDividerModule]
  },
  props: {
    homeBtnClick: action('homeBtnClick')
  }
}));
