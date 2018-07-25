import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListWrapperComponent } from './pokemon-list-wrapper.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material';
import { PokemonService } from '../../services/pokemon.service';

describe('PokemonListWrapperComponent', () => {
  let component: PokemonListWrapperComponent;
  let fixture: ComponentFixture<PokemonListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule],
      declarations: [
        PokemonListWrapperComponent,
        PokemonListComponent,
        PokemonCardComponent
      ],
      providers: [PokemonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
