import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonDetail } from './../../models/pokemon-detail.model';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
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
      declarations: [PokemonDetailComponent, CapitalizePipe],
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemonDetail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return color', () => {
    expect(component.getColor('fire')).toEqual({ backgroundColor: '#F08030' });
  });

  it('should return title color', () => {
    expect(component.getTitleColor()).toEqual({
      backgroundColor: 'rgb(171, 79, 13)'
    });
  });
});
