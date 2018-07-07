import { PokemonDetail } from './../models/pokemon-detail.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Array<PokemonDetail>;

  constructor() {}

  ngOnInit() {}
}
