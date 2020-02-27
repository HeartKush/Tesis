import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortoloComponent } from './tortolo.component';

describe('TortoloComponent', () => {
  let component: TortoloComponent;
  let fixture: ComponentFixture<TortoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
