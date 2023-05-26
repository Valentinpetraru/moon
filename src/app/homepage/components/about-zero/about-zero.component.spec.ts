import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutZeroComponent } from './about-zero.component';

describe('AboutZeroComponent', () => {
  let component: AboutZeroComponent;
  let fixture: ComponentFixture<AboutZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutZeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
