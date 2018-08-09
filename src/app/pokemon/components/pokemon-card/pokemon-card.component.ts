import { PokemonService } from './../../services/pokemon.service';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemonName')
  pokemonName: string;
  @Input()
  pokemonImageURL: string;
  @Input()
  pokemonTypes: Array<string>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  public getColor() {
    if (!this.pokemonTypes || this.pokemonTypes.length > 1) {
      return '';
    } else {
      const type = this.pokemonTypes[0];
      return this.pokemonService.getColorCode(type);
    }
  }

  public getBackground() {
    if (!this.pokemonTypes || this.pokemonTypes.length < 2) {
      return '';
    } else {
      const codeList = this.pokemonTypes.map((colorName: string) =>
        this.pokemonService.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return linearGradient;
    }
  }
}
