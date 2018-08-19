import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import {
  map,
  catchError,
  tap,
  share,
  shareReplay,
  publishReplay,
  refCount
} from 'rxjs/operators';
import Pokemon from '../models/pokemon.model';
import { colorCode, titleColorCode } from './colorCode';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
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

  getColorCode(colorName: string): string {
    if (colorCode.has(colorName)) {
      return colorCode.get(colorName);
    }
    return '#fff';
  }

  getTitleColorCode(colorName: string): string {
    if (titleColorCode.has(colorName)) {
      return titleColorCode.get(colorName);
    }
    return '#fff';
  }
}
