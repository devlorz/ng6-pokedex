import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

import { PokemonDetail } from '../models/pokemon-detail.model';
import Pokemon from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private baseUrl = 'https://ng5-pwa-a853e.firebaseio.com/pokemon.json';
  private baseSpriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private cachePokemonList$: Observable<Array<PokemonDetail>>;

  constructor(private http: HttpClient) {}

  requestPokemon(): Observable<Array<PokemonDetail>> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((pokemonList: Array<Pokemon>) => {
        return pokemonList.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          sprite: `${this.baseSpriteUrl}${pokemon.id}.png`,
          id: pokemon.id,
          types: pokemon.types.sort(),
          description: pokemon.description
        }));
      }),
      catchError(() => of(<Array<PokemonDetail>>[]))
    );
  }

  getPokemonList(): Observable<Array<PokemonDetail>> {
    if (!this.cachePokemonList$) {
      this.cachePokemonList$ = this.requestPokemon().pipe(shareReplay(1));
    }
    return this.cachePokemonList$;
  }

  getPokemonById(id: number): Observable<PokemonDetail> {
    return this.cachePokemonList$.pipe(
      map(pokemonList =>
        pokemonList.filter(pokemon => pokemon.id === id).reduce((_, cur) => cur)
      )
    );
  }
}
