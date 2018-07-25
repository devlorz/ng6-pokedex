import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListWrapperComponent } from './pokemon-list-wrapper.component';

describe('PokemonListWrapperComponent', () => {
  let component: PokemonListWrapperComponent;
  let fixture: ComponentFixture<PokemonListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListWrapperComponent ]
    })
    .compileComponents();
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
