import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { PokemonDetail } from '../../models/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  @Input()
  pokemonList: Array<PokemonDetail>;
  @Output()
  openDialog = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public onOpenDialog(id: number) {
    this.openDialog.emit(id);
  }
}
