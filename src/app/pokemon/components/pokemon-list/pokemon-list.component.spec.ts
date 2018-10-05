import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from '../../../app-material.module';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { CapitalizePipe } from './../../../shared/capitalize.pipe';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(PokemonListComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
      .configureTestingModule({
        declarations: [
          PokemonListComponent,
          PokemonCardComponent,
          CapitalizePipe
        ],
        imports: [AppMaterialModule]
      })
      .compileComponents();
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
      {
        name: 'name',
        sprite: 'image',
        types: [],
        id: 0,
        description: 'desc',
        backgroundColor: { backgroundColor: '#F08030' },
        titleColor: 'rgb(171, 79, 13)',
        typesColor: { fire: '#F08030' }
      }
    ];
    fixture.detectChanges();
    const pokemonlistDE: DebugElement = fixture.debugElement;
    const pokemonlistElement: HTMLElement = pokemonlistDE.nativeElement;
    const p = pokemonlistElement.querySelector('app-pokemon-card');
    expect(p).not.toBeNull();
  });
});
