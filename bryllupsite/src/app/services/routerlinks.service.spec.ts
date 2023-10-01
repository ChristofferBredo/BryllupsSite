import { TestBed } from '@angular/core/testing';

import { RouterlinksService } from './routerlinks.service';

describe('RouterlinksService', () => {
  let service: RouterlinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterlinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
