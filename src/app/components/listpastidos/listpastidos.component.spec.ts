import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpastidosComponent } from './listpastidos.component';

describe('ListpastidosComponent', () => {
  let component: ListpastidosComponent;
  let fixture: ComponentFixture<ListpastidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpastidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpastidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
