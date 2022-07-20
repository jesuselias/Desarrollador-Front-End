import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsValuesIndicatorComponent } from './details-values-indicator.component';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { By } from '@angular/platform-browser';

describe('DetailsValuesIndicatorComponent', () => {
  let component: DetailsValuesIndicatorComponent;
  let fixture: ComponentFixture<DetailsValuesIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [HttpClientModule],
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
  it('should create', () => {
    expect(component).toBeTruthy();
    const testData = 'Indicators'
    expect(component.test).toEqual(testData)
  });
  
});
