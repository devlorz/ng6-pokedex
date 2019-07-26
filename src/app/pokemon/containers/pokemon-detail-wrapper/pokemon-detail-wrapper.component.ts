import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PokemonDetail } from '../../models/pokemon-detail.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-wrapper',
  templateUrl: './pokemon-detail-wrapper.component.html',
  styleUrls: ['./pokemon-detail-wrapper.component.css']
})
export class PokemonDetailWrapperComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public pokemon: PokemonDetail,
    private pokedexService: PokemonService
  ) {
    this.pokemon.backgroundColor = this.getBackgroundColor();
    this.pokemon.titleColor = this.getTitleColor();
    this.pokemon.typesColor = this.pokemon.types.reduce((acc, cur) => {
      acc[cur] = this.getTypeColor(cur);
      return acc;
    }, {});
  }

  ngOnInit() {}

  getTypeColor(type: string) {
    return this.pokedexService.getColorCode(type);
  }

  getTitleColor() {
    return this.pokedexService.getTitleColorCode(this.pokemon.types[0]);
  }

  getBackgroundColor() {
    if (this.pokemon.types && this.pokemon.types.length === 1) {
      const type = this.pokemon.types[0];
      const color = this.pokedexService.getColorCode(type);
      return { 'background-color': color };
    } else if (this.pokemon.types && this.pokemon.types.length === 2) {
      const codeList = this.pokemon.types.map((colorName: string) =>
        this.pokedexService.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return { background: linearGradient };
    }
  }
}
