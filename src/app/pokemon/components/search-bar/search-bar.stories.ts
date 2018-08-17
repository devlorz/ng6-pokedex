import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { SearchBarComponent } from './search-bar.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

storiesOf('Search Bar', module).add('initial', () => ({
  component: SearchBarComponent,
  moduleMetadata: {
    imports: [
      MatFormFieldModule,
      MatInputModule,
      BrowserAnimationsModule,
      FormsModule
    ]
  },
  props: {
    search: action('search')
  }
}));
