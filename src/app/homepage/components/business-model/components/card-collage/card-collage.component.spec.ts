import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollageComponent } from './card-collage.component';

describe('CardCollageComponent', () => {
  let component: CardCollageComponent;
  let fixture: ComponentFixture<CardCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCollageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
