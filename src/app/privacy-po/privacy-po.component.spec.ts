import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPoComponent } from './privacy-po.component';

describe('PrivacyPoComponent', () => {
  let component: PrivacyPoComponent;
  let fixture: ComponentFixture<PrivacyPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
