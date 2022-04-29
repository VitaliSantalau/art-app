import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksListScrollComponent } from './artworks-list-scroll.component';

describe('ArtworksListScrollComponent', () => {
  let component: ArtworksListScrollComponent;
  let fixture: ComponentFixture<ArtworksListScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworksListScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworksListScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
