import { TestBed } from '@angular/core/testing'

import { ResponsiveDesignService } from './responsivedesign.service'

describe('ResponsivedesignService', () => {
  let service: ResponsiveDesignService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ResponsiveDesignService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
