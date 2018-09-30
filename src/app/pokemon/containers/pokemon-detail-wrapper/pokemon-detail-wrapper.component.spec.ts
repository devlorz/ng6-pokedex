import { AppMaterialModule } from './../../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';

import { PokemonDetailWrapperComponent } from './pokemon-detail-wrapper.component';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../../../shared/shared.module';

describe('PokemonDetailWrapperComponent', () => {
  let component: PokemonDetailWrapperComponent;
  let fixture: ComponentFixture<PokemonDetailWrapperComponent>;
  const pokemonDetail: PokemonDetail = {
    name: 'name',
    sprite: 'image',
    types: [],
    id: 0,
    description: 'desc'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, SharedModule],
      declarations: [PokemonDetailWrapperComponent, PokemonDetailComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: pokemonDetail }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
