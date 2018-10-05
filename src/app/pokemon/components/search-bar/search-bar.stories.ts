import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { AppMaterialModule } from './../../../app-material.module';
import { SearchBarComponent } from './search-bar.component';

storiesOf('Search Bar', module).add('initial', () => ({
  component: SearchBarComponent,
  moduleMetadata: {
    imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
  },
  props: {
    search: action('search')
  }
}));
