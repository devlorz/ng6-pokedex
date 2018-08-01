import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-list-wrapper',
  templateUrl: './pokemon-list-wrapper.component.html',
  styleUrls: ['./pokemon-list-wrapper.component.css']
})
export class PokemonListWrapperComponent implements OnInit {
  public pokemonList: Array<PokemonDetail> = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(
      res => {
        this.pokemonList = res;
      },
      error => {
        this.pokemonList = [];
      }
    );
  }
}