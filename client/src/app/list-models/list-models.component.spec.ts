import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModuleComponent } from './list-models.component';

describe('ListModuleComponent', () => {
  let component: ListModuleComponent;
  let fixture: ComponentFixture<ListModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListModuleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
