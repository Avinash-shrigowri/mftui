import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupfilesComponent } from './groupfiles.component';

describe('GroupfilesComponent', () => {
  let component: GroupfilesComponent;
  let fixture: ComponentFixture<GroupfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
