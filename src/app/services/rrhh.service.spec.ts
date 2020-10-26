import { TestBed } from '@angular/core/testing';

import { RrhhService } from './rrhh.service';
import {IonicModule} from '@ionic/angular';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('RrhhService', () => {
  let service: RrhhService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        RouterTestingModule.withRoutes([])]
    }).compileComponents();
    service = TestBed.inject(RrhhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
