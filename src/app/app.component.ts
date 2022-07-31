import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PartService } from './service/part-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private partService: PartService) {}
  ngOnInit() {}

  partName: string = '';
  searching: boolean = false;
  title = 'partsf';
  response: any = [];

  find() {
    this.searching = true;
    this.partService.getAllParts(this.partName).subscribe(
      (data) => {
        this.response = data;
        this.searching = false;
        console.log(this.response);
      }
    );
  }
}
