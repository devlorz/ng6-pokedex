import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { map } from 'rxjs/operators';
import Pokemon from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://ng5-pwa-a853e.firebaseio.com/pokemon.json';
  private baseSpriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private colorCode = new Map([
    ['grass', '#78C850'],
    ['fire', '#F08030'],
    ['water', '#6890F0'],
    ['bug', '#A8B820'],
    ['poison', '#A040A0'],
    ['flying', '#A890F0'],
    ['normal', '#A8A878'],
    ['electric', '#F8D030'],
    ['ground', '#E0C068'],
    ['fairy', '#EE99AC'],
    ['fighting', '#C03028'],
    ['psychic', '#F85888'],
    ['steel', '#B8B8D0'],
    ['ice', '#98D8D8'],
    ['rock', '#B8A038'],
    ['dragon', '#7038F8'],
    ['ghost', '#705898']
  ]);

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Array<PokemonDetail>> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((pokemonList: Array<Pokemon>) => {
        return pokemonList.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          sprite: `${this.baseSpriteUrl}${pokemon.id}.png`,
          id: pokemon.id,
          types: pokemon.types.sort(),
          description: pokemon.description
        }));
      })
    );
  }

  getColorCode(colorName: string): string {
    if (this.colorCode.has(colorName)) {
      return this.colorCode.get(colorName);
    }
    return '#fff';
  }
}
