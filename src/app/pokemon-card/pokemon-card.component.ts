import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemonName') pokemonName: string;
  @Input() pokemonImageURL: string;

  constructor() {}

  ngOnInit() {}
}
