import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIndicatorComponent } from './details-indicator.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('DetailsIndicatorComponent', () => {
  let component: DetailsIndicatorComponent;
  let fixture: ComponentFixture<DetailsIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DetailsIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    const testData = 'Indicators'
    expect(component.test).toEqual(testData)
  });


});
