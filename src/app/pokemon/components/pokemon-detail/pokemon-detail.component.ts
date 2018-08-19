import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public pokemon: PokemonDetail,
    private pokedexService: PokemonService
  ) {}

  ngOnInit() {}

  getColor(type: string) {
    return this.pokedexService.getColorCode(type);
  }

  getTitleColor() {
    return this.pokedexService.getTitleColorCode(this.pokemon.types[0]);
  }

  public getBackgroundColor() {
    if (this.pokemon.types.length > 1) {
      return '';
    } else {
      const type = this.pokemon.types[0];
      return this.pokedexService.getColorCode(type);
    }
  }

  public getBackground() {
    if (this.pokemon.types.length < 2) {
      return '';
    } else {
      const codeList = this.pokemon.types.map((colorName: string) =>
        this.pokedexService.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return linearGradient;
    }
  }
}
