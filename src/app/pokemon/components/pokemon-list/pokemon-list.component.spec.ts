import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { DebugElement } from '@angular/core';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PokemonCardComponent],
      imports: [MatCardModule, MatButtonModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render pokemon component when no pokemon data', () => {
    component.pokemonList = [];
    fixture.detectChanges();
    const pokemonlistDE: DebugElement = fixture.debugElement;
    const pokemonlistElement: HTMLElement = pokemonlistDE.nativeElement;
    const p = pokemonlistElement.querySelector('app-pokemon-card');
    expect(p).toBeNull();
  });

  it('should render pokemon component when there is pokemon data', () => {
    component.pokemonList = [
      { name: 'name', sprite: 'image', types: [], id: 0, description: 'desc' }
    ];
    fixture.detectChanges();
    const pokemonlistDE: DebugElement = fixture.debugElement;
    const pokemonlistElement: HTMLElement = pokemonlistDE.nativeElement;
    const p = pokemonlistElement.querySelector('app-pokemon-card');
    expect(p).not.toBeNull();
  });
});
