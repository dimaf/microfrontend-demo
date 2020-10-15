import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyLoadedComponentComponent } from './dynamically-loaded-component.component';

describe('DynamicallyLoadedComponentComponent', () => {
  let component: DynamicallyLoadedComponentComponent;
  let fixture: ComponentFixture<DynamicallyLoadedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyLoadedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyLoadedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
