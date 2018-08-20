import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list-wrapper',
  templateUrl: './pokemon-list-wrapper.component.html',
  styleUrls: ['./pokemon-list-wrapper.component.css']
})
export class PokemonListWrapperComponent implements OnInit {
  public pokemonList: Array<PokemonDetail> = [];
  public pokemonList$: Observable<Array<PokemonDetail>>;

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

  public onOpenDialog(id: number) {
    this.pokemonService
      .getPokemonById(id)
      .pipe(take(1))
      .subscribe(res =>
        this.dialog.open(PokemonDetailComponent, {
          width: '100%',
          height: '100%',
          hasBackdrop: true,
          data: res
        })
      );
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
