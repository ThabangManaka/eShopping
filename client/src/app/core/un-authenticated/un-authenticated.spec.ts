import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthenticated } from './un-authenticated';

describe('UnAuthenticated', () => {
  let component: UnAuthenticated;
  let fixture: ComponentFixture<UnAuthenticated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnAuthenticated],
    }).compileComponents();

    fixture = TestBed.createComponent(UnAuthenticated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
