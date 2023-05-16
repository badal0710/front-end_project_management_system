import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {}

  @Input() TableKeys:any[]=[];
  @Input() TableValue!:any[];
  @Input() TableName!:any[];
  @Input() TableAction!:any[];
  @Input() RowAction!:any[];
  @Input() ColumnNames:any=[];

  public keys:any[]=[];
  public values:any[]=[];
  public actions:any[]=[];
  public rowAction:any;
  public tableAction:any;
  public columnNamess:any=[];

  public formData:any={};

  ngOnInit(): void {
    this.keys=this.TableKeys;
    this.values=this.TableValue;
    this.actions=this.RowAction;
    this.rowAction=this.RowAction;
    this.tableAction=this.TableAction;

    console.log("c: ",this.ColumnNames);
    // for(let a of this.keys[0]){
    // }

    // for(let i=0;i<=this.TableKeys.length;i++){
    //   this.formData[this.TableKeys[i]]=null;
    // }

    console.log(this.formData);

  }

  create(){
    alert("hello");
  }

}
