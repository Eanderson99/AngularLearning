import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerdemoComponent } from './hostlistenerdemo.component';

describe('HostlistenerdemoComponent', () => {
  let component: HostlistenerdemoComponent;
  let fixture: ComponentFixture<HostlistenerdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
