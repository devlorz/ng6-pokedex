import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SharedModule } from '../../../shared/shared.module';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonDetailWrapperComponent } from './pokemon-detail-wrapper.component';

describe('PokemonDetailWrapperComponent', () => {
  let component: PokemonDetailWrapperComponent;
  let fixture: ComponentFixture<PokemonDetailWrapperComponent>;
  const pokemonDetail: PokemonDetail = {
    name: 'name',
    sprite: 'image',
    types: [],
    id: 0,
    description: 'desc',
    backgroundColor: { backgroundColor: '#F08030' },
    titleColor: 'rgb(171, 79, 13)',
    typesColor: { fire: '#F08030' }
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
