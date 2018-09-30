import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { PokemonService } from '../../services/pokemon.service';

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
