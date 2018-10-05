import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppMaterialModule } from '../../../app-material.module';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent, SidenavComponent, ToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return over when small screen', () => {
    component.isSmallScreen = true;
    expect(component.sideNavMode).toBe('over');
  });

  it('should return side when big screen', () => {
    component.isSmallScreen = false;
    expect(component.sideNavMode).toBe('side');
  });
});
