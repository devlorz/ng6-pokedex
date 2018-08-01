import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { PokemonService } from '../../services/pokemon.service';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, HttpClientModule],
      declarations: [PokemonCardComponent],
      providers: [PokemonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getColor() should return empty when types is more than 1', () => {
    component.pokemonTypes = ['type1', 'type2'];
    expect(component.getColor()).toBe('');
  });

  it('getColor() should return colorCode when there is only 1 type', () => {
    component.pokemonTypes = ['grass'];
    expect(component.getColor()).toBe('#78C850');
  });

  it('getBackground() should return empty when types is less than 1', () => {
    component.pokemonTypes = ['type1'];
    expect(component.getBackground()).toBe('');
  });

  it('getBackground() should return linear-gradient when types is more than 1', () => {
    component.pokemonTypes = ['fire', 'poison'];
    expect(component.getBackground()).toBe(
      'linear-gradient(90deg, #F08030 50%, #A040A0 50%)'
    );
  });
});
