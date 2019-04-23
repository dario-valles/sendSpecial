import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdetailsComponent } from './yourdetails.component';

describe('YourdetailsComponent', () => {
  let component: YourdetailsComponent;
  let fixture: ComponentFixture<YourdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
