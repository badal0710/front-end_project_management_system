import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit{

  @Input() data!: any[];

  myBreadCrumbs!:any[];

  constructor(){
    //hello
  }

  ngOnInit(): void {
    this.myBreadCrumbs = this.data;
  }
}
