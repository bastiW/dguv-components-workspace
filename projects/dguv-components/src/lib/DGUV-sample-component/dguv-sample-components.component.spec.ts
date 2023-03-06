import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DguvSampleComponent } from './dguv-sample-components.component';

describe('DguvSampleComponent', () => {
  let component: DguvSampleComponent;
  let fixture: ComponentFixture<DguvSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DguvSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DguvSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
