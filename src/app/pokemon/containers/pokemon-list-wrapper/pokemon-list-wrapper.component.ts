import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list-wrapper',
  templateUrl: './pokemon-list-wrapper.component.html',
  styleUrls: ['./pokemon-list-wrapper.component.css']
})
export class PokemonListWrapperComponent implements OnInit {
  public pokemonList: Array<PokemonDetail> = [];
  public pokemonList$: Observable<Array<PokemonDetail>>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

  public onSearch(searchText: string) {
    this.pokemonList$ = this.pokemonService
      .getPokemonList()
      .pipe(
        map((pokemonDetailList: Array<PokemonDetail>) =>
          pokemonDetailList.filter(
            pokemon =>
              pokemon.name.toUpperCase().indexOf(searchText.toUpperCase()) >= 0
          )
        )
      );
  }
}
