import { TestBed } from '@angular/core/testing';

import { Acnt } from './acnt';

describe('Acnt', () => {
  let service: Acnt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Acnt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
