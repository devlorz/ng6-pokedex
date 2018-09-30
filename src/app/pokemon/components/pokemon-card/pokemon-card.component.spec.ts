import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponent, RenderResult } from 'ngx-testing-library';

import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonService } from '../../services/pokemon.service';
import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { AppMaterialModule } from '../../../app-material.module';

describe('PokemonCardComponent', () => {
  // let component: PokemonCardComponent;
  // let fixture: ComponentFixture<PokemonCardComponent>;
  // let wrapper: RenderResult;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [MatCardModule, MatButtonModule, HttpClientModule],
  //     declarations: [PokemonCardComponent],
  //     providers: [PokemonService]
  //   }).compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PokemonCardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(async () => {
  //   wrapper = await createComponent(`<app-pokemon-card></app-pokemon-card>`, {
  //     imports: [MatCardModule, MatButtonModule, HttpClientModule],
  //     declarations: [PokemonCardComponent],
  //     providers: [PokemonService]
  //   });
  // });

  it('should create', async () => {
    const { container } = await createComponent(
      `<app-pokemon-card></app-pokemon-card>`,
      {
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [PokemonCardComponent, CapitalizePipe],
        providers: [PokemonService]
      }
    );
    expect(container).toBeTruthy();
  });

  it('should render pokemon name, image URL and one background color when 1 type', async () => {
    const pokemonName = 'pikachu';
    const pokemonImageURL = `localhost`;
    const pokemonTypes = ['grass'];
    const { getByText, getByAltText, container } = await createComponent(
      {
        component: PokemonCardComponent,
        parameters: {
          pokemonName,
          pokemonImageURL,
          pokemonTypes
        }
      },
      {
        detectChanges: true,
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [PokemonCardComponent, CapitalizePipe],
        providers: [PokemonService]
      }
    );
    expect(getByText('Pikachu')).toBeDefined();
    expect(getByAltText('pokemon-img').getAttribute('src')).toContain(
      pokemonImageURL
    );
    expect(container.querySelector('mat-card').getAttribute('style')).toContain(
      'background-color: rgb(120, 200, 80)'
    );
  });

  it('should render pokemon name, image URL and two background colors when 2 types', async () => {
    const pokemonName = 'pikachu';
    const pokemonImageURL = `localhost`;
    const pokemonTypes = ['fire', 'poison'];
    const {
      getByText,
      getByAltText,
      container,
      fixture
    } = await createComponent(
      {
        component: PokemonCardComponent,
        parameters: {
          pokemonName,
          pokemonImageURL,
          pokemonTypes: pokemonTypes
        }
      },
      {
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [PokemonCardComponent, CapitalizePipe],
        providers: [PokemonService],
        detectChanges: true
      }
    );
    expect(getByText('Pikachu')).toBeDefined();
    expect(getByAltText('pokemon-img').getAttribute('src')).toContain(
      pokemonImageURL
    );
    expect(container.querySelector('mat-card')).toBeTruthy();
    const component = fixture.componentInstance;
    expect(component.getBackground()).toEqual({
      background: 'linear-gradient(90deg, #F08030 50%, #A040A0 50%)'
    });
  });

  // it('getColor() should return empty when types is more than 1', () => {
  //   component.pokemonTypes = ['type1', 'type2'];
  //   expect(component.getColor()).toBe('');
  // });

  // it('getColor() should return colorCode when there is only 1 type', () => {
  //   component.pokemonTypes = ['grass'];
  //   expect(component.getColor()).toBe('#78C850');
  // });

  // it('getBackground() should return empty when types is less than 1', () => {
  //   component.pokemonTypes = ['type1'];
  //   expect(component.getBackground()).toBe('');
  // });

  // it('getBackground() should return linear-gradient when types is more than 1', () => {
  //   component.pokemonTypes = ['fire', 'poison'];
  //   expect(component.getBackground()).toBe(
  //     'linear-gradient(90deg, #F08030 50%, #A040A0 50%)'
  //   );
  // });
});
