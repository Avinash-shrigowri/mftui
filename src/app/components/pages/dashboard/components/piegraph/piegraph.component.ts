import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piegraph',
  templateUrl: './piegraph.component.html',
  styleUrls: ['./piegraph.component.css']
})
export class PiegraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
