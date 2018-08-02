import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import {
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
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
