import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { AppMaterialModule } from './../../../app-material.module';
import { ToolbarComponent } from './toolbar.component';

storiesOf('Toolbar', module).add('initial', () => ({
  component: ToolbarComponent,
  moduleMetadata: {
    imports: [AppMaterialModule]
  },
  props: {
    homeBtnClick: action('homeBtnClick')
  }
}));
