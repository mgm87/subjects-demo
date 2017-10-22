import { TestBed, inject } from '@angular/core/testing';

import { SubjectProviderService } from './subject-provider.service';

describe('SubjectProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectProviderService]
    });
  });

  it('should be created', inject([SubjectProviderService], (service: SubjectProviderService) => {
    expect(service).toBeTruthy();
  }));
});
