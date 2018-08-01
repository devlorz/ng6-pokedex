import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonService]
    });
  });

  it('should be created', inject(
    [PokemonService],
    (service: PokemonService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return colorCode', inject(
    [PokemonService],
    (service: PokemonService) => {
      expect(service.getColorCode('water')).toBe('#6890F0');
      expect(service.getColorCode('etc')).toBe('#fff');
    }
  ));
});
