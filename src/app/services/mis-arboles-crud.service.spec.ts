import { TestBed } from '@angular/core/testing';

import { MisArbolesCrudService } from './mis-arboles-crud.service';

describe('MisArbolesCrudService', () => {
  let service: MisArbolesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisArbolesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
