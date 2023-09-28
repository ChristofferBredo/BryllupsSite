import { TestBed } from '@angular/core/testing';

import { AgendaService } from './agenda.service';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return agendaitems', () => {
    let items = service.GetAgendaItems()
    expect(items.length).toBeGreaterThan(0);
  })
});
