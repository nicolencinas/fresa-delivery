/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlavourService } from './flavour.service';

describe('Service: Flavour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlavourService]
    });
  });

  it('should ...', inject([FlavourService], (service: FlavourService) => {
    expect(service).toBeTruthy();
  }));
});
