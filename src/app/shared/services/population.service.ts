import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  constructor(private httpClient: HttpClient) { }

  getRemoteDataSource() {
    return this.httpClient.get('/api');
  }
}
