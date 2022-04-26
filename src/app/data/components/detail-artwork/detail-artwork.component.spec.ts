import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtworkComponent } from './detail-artwork.component';

describe('DetailArtworkComponent', () => {
  let component: DetailArtworkComponent;
  let fixture: ComponentFixture<DetailArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArtworkComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
