import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicArtworkComponent } from './dynamic-artwork.component';

describe('DynamicArtworkComponent', () => {
  let component: DynamicArtworkComponent;
  let fixture: ComponentFixture<DynamicArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicArtworkComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
