import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Models3dComponent } from './models3d.component';

describe('Models3dComponent', () => {
  let component: Models3dComponent;
  let fixture: ComponentFixture<Models3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Models3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Models3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
