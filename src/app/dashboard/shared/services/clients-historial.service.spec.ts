/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsHistorialService } from './clients-historial.service';

describe('Service: ClientsHistorial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsHistorialService]
    });
  });

  it('should ...', inject([ClientsHistorialService], (service: ClientsHistorialService) => {
    expect(service).toBeTruthy();
  }));
});
