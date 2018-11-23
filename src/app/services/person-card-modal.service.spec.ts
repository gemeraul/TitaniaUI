import { TestBed, inject } from '@angular/core/testing';

import { PersonCardModalService } from './person-card-modal.service';

describe('PersonCardModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonCardModalService]
    });
  });

  it('should be created', inject([PersonCardModalService], (service: PersonCardModalService) => {
    expect(service).toBeTruthy();
  }));
});
