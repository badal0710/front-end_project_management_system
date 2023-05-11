import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {}

  @Input() ProjectKeys!:any[];
  @Input() ProjectValue!:any[];

  public keys:any[]=[];
  public values:any[]=[];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.keys=this.ProjectKeys;
    this.values=this.ProjectValue;

    console.log(this.ProjectKeys);
    console.log(this.ProjectKeys);
  }

}
