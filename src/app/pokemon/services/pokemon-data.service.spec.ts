import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokemonDataService } from './pokemon-data.service';

describe('PokemonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonDataService]
    });
  });

  it('should be created', inject(
    [PokemonDataService],
    (service: PokemonDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
