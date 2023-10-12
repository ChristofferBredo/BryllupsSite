import { TestBed } from '@angular/core/testing';

import { HomeitemService } from './homeitem.service';

describe('HomeitemService', () => {
  let service: HomeitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
