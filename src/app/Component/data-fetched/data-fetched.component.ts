import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../service/new/json-service.service';

@Component({
  selector: 'app-data-fetched',
  templateUrl: './data-fetched.component.html',
  styleUrl: './data-fetched.component.css'
})
export class DataFetchedComponent implements OnInit{

  constructor(private apiData: JsonServiceService) { 

  }
  ngOnInit(): void {
    this.apiData.getPosts()
  }


}
