import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksListMaterialComponent } from './artworks-list-material.component';

describe('ArtworksListMaterialComponent', () => {
  let component: ArtworksListMaterialComponent;
  let fixture: ComponentFixture<ArtworksListMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworksListMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworksListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
