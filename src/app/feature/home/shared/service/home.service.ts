import { HttpService } from  '@core-service/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  URL = 'https://free.currconv.com/api/v7/convert?q=USD_COP&compact=ultra&apiKey=0320c78605847bf440e8';

  constructor(protected http: HttpService) { }

  public getTrmToday() {
    return this.http.doGet<any>(this.URL);
  }
}
