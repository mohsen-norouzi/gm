import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Control } from '../models';

const API_URL = `${environment.BASE_URL}/controls`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getControls = () => {
    return this.httpClient
      .get<Control[]>(API_URL)
      .pipe(map((controls) => {
        return controls || []
      }));
  }
}
