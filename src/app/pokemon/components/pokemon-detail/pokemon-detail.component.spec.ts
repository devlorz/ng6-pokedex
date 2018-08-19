import { HttpClientModule } from '@angular/common/http';
import { PokemonDetail } from './../../models/pokemon-detail.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { InjectionToken } from '@angular/core';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const pokemonDetail: PokemonDetail = {
    name: 'name',
    sprite: 'image',
    types: [],
    id: 0,
    description: 'desc'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, CapitalizePipe],
      imports: [MatDialogModule, HttpClientModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: pokemonDetail }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
