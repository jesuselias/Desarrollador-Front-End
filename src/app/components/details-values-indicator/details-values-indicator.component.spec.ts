import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsValuesIndicatorComponent } from './details-values-indicator.component';

describe('DetailsValuesIndicatorComponent', () => {
  let component: DetailsValuesIndicatorComponent;
  let fixture: ComponentFixture<DetailsValuesIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsValuesIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsValuesIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
