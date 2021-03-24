import { Component, OnInit } from '@angular/core';
import { HomeService } from './shared/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trm: string;

  constructor(protected homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getTrmToday().subscribe(trmToday => {
      this.trm = trmToday.USD_COP;
    });
  }

}
