/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistoryDetailService } from './history-detail.service';

describe('Service: HistoryDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryDetailService]
    });
  });

  it('should ...', inject([HistoryDetailService], (service: HistoryDetailService) => {
    expect(service).toBeTruthy();
  }));
});
