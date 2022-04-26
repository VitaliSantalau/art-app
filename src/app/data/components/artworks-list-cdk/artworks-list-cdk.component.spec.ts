import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksListCDKComponent } from './artworks-list-cdk.component';

describe('ArtworksListCDKComponent', () => {
  let component: ArtworksListCDKComponent;
  let fixture: ComponentFixture<ArtworksListCDKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworksListCDKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworksListCDKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
