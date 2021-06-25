import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsEquipoComponent } from './graphics-equipo.component';

describe('GraphicsEquipoComponent', () => {
  let component: GraphicsEquipoComponent;
  let fixture: ComponentFixture<GraphicsEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
