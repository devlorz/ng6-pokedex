import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

storiesOf('Toolbar', module).add('initial', () => ({
  component: ToolbarComponent,
  moduleMetadata: {
    imports: [MatButtonModule, MatToolbarModule, MatIconModule]
  },
  props: {
    homeBtnClick: action('homeBtnClick')
  }
}));
