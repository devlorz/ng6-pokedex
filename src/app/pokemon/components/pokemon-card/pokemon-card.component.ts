import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { PokemonService } from './../../services/pokemon.service';

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
  @Input()
  pokemonId: number;
  @Output()
  openDialog = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  public onOpenDialog() {
    this.openDialog.next(this.pokemonId);
  }

  public getBackground() {
    if (this.pokemonTypes && this.pokemonTypes.length === 1) {
      const type = this.pokemonTypes[0];
      const color = this.pokemonService.getColorCode(type);
      return { backgroundColor: color };
    } else if (this.pokemonTypes && this.pokemonTypes.length === 2) {
      const codeList = this.pokemonTypes.map((colorName: string) =>
        this.pokemonService.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return { background: linearGradient };
    }
  }
}
