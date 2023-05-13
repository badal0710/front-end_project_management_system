import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {}

  @Input() TableKeys!:any[];
  @Input() TableValue!:any[];
  @Input() TableName!:any[];

  public keys:any[]=[];
  public values:any[]=[];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.keys=this.TableKeys;
    this.values=this.TableValue;
  }

}
