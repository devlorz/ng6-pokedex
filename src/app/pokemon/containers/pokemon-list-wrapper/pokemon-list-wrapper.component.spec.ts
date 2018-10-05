import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { PokemonDataService } from '../../services/pokemon-data.service';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonListWrapperComponent } from './pokemon-list-wrapper.component';

describe('PokemonListWrapperComponent', () => {
  let component: PokemonListWrapperComponent;
  let fixture: ComponentFixture<PokemonListWrapperComponent>;

  const samplePokemonDetail: Array<PokemonDetail> = [];
  const mockService = <PokemonDataService>{
    getPokemonList: () => of(samplePokemonDetail)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [
        PokemonListWrapperComponent,
        PokemonListComponent,
        PokemonCardComponent,
        SearchBarComponent,
        CapitalizePipe
      ],
      providers: [{ provide: PokemonDataService, useValue: mockService }]
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
