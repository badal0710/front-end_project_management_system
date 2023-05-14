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
  @Input() TableAction!:any[];
  @Input() RowAction!:any[];

  public keys:any[]=[];
  public values:any[]=[];
  public actions:any[]=[];
  public rowAction:any;
  public tableAction:any;

  ngOnInit(): void {
    this.keys=this.TableKeys;
    this.values=this.TableValue;
    this.actions=this.RowAction;
    this.rowAction=this.RowAction;
    this.tableAction=this.TableAction;
  }

}
