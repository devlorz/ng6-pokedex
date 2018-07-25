import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { map } from 'rxjs/operators';
import Pokemon from '../models/pokemon.model';
import { PokemonModule } from '../pokemon.module';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://ng5-pwa-a853e.firebaseio.com/pokemon.json';
  private baseSpriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

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
}
