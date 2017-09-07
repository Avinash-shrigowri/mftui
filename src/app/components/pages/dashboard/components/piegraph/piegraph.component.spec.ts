import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiegraphComponent } from './piegraph.component';

describe('PiegraphComponent', () => {
  let component: PiegraphComponent;
  let fixture: ComponentFixture<PiegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
