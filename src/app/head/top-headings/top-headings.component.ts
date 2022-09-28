import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/service/newsapiservice.service';
@Component({
  selector: 'app-top-headings',
  templateUrl: './top-headings.component.html',
  styleUrls: ['./top-headings.component.scss'],
})
export class TopHeadingsComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) {}
  headingDisplay: any = [];

  ngOnInit(): void {
    this._service.getNews().subscribe((data) => {
      console.log(data);
      this.headingDisplay = data.articles;
    });
  }
}
