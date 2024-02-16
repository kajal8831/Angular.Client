import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsohomeComponent } from './ssohome.component';

describe('SsohomeComponent', () => {
  let component: SsohomeComponent;
  let fixture: ComponentFixture<SsohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
