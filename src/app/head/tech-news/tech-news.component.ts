import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/service/newsapiservice.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss'],
})
export class TechNewsComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) {}
  techDisplay: any = [];
  ngOnInit(): void {
    this._service.techNews().subscribe((data) => {
      console.log(data);
      this.techDisplay = data.articles;
    });
  }
}
