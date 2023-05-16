import { Component } from '@angular/core';
import { InverstorService } from 'src/app/services/project/inverstor.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent {
  data: any[] = [];

  constructor(private inverstorDetails: InverstorService) { }

  ngOnInit() {
    this.inverstorDetails.getData().subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }
}
