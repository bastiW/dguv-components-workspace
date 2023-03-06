import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DguvComponentsComponent } from './dguv-components.component';

describe('DguvComponentsComponent', () => {
  let component: DguvComponentsComponent;
  let fixture: ComponentFixture<DguvComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DguvComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DguvComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
