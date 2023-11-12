import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBPComponent } from './check-bp.component';

describe('CheckBPComponent', () => {
  let component: CheckBPComponent;
  let fixture: ComponentFixture<CheckBPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
