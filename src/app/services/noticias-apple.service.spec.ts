import { TestBed } from '@angular/core/testing';

import { NoticiasAppleService } from './noticias-apple.service';

describe('NoticiasAppleService', () => {
  let service: NoticiasAppleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasAppleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
