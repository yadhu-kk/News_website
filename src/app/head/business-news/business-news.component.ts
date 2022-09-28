import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/service/newsapiservice.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss'],
})
export class BusinessNewsComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) {}
  businessData: any = [];

  ngOnInit(): void {
    this._service.businessNews().subscribe((data) => {
      this.businessData = data.articles;
    });
  }
}
