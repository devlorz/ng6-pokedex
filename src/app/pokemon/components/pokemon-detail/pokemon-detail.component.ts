import { Component, Input, OnInit } from '@angular/core';

import { PokemonDetail } from '../../models/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemon: PokemonDetail;

  constructor() {}

  ngOnInit() {}

  getColor(type: string) {
    return { backgroundColor: this.pokemon.typesColor[type] };
  }

  getTitleColor() {
    return { backgroundColor: this.pokemon.titleColor };
  }
}
