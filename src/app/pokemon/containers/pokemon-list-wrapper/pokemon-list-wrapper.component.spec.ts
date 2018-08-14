import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListWrapperComponent } from './pokemon-list-wrapper.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { of } from 'rxjs';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('PokemonListWrapperComponent', () => {
  let component: PokemonListWrapperComponent;
  let fixture: ComponentFixture<PokemonListWrapperComponent>;

  const samplePokemonDetail: Array<PokemonDetail> = [];
  const mockService = <PokemonService>{
    getPokemon: () => of(samplePokemonDetail)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [
        PokemonListWrapperComponent,
        PokemonListComponent,
        PokemonCardComponent,
        SearchBarComponent
      ],
      providers: [{ provide: PokemonService, useValue: mockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty array when onInit', () => {
    expect(component.pokemonList).toEqual([]);
  });
});
