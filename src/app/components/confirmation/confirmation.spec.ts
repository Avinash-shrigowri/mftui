import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmation } from './confirmation.component';

describe('Confirmation', () => {
  let component: Confirmation;
  let fixture: ComponentFixture<Confirmation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirmation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
