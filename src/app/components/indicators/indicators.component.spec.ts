import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsComponent } from './indicators.component';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('IndicatorsComponent', () => {
  let component: IndicatorsComponent;
  let fixture: ComponentFixture<IndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ IndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const btnElement = fixture.debugElement.query(By.css('button.btnInValues'))
    btnElement.nativeElement.click()
    const testData = 'fine values'
    expect(component.test).toEqual(testData)
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    const btnElement = fixture.debugElement.query(By.css('button.btnInDetails'))
    btnElement.nativeElement.click()
    const testData = 'fine details'
    expect(component.test).toEqual(testData)
  });
});
