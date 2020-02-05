import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/app/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class MedgrupoService {

  constructor(
    private http: HttpClient
  ) { }

  // private isLocal: boolean = (environment.environmentType === Constants.environmentLocal);

  getProducts() {
    return this.http.get(`${environment.API}/aulas-cronogramas`);
  }

  createProduct(body: Object) {
    return this.http.post(`${environment.API}/aulas-cronogramas`, body);
  }
}
