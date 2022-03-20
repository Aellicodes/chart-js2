import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective, Label } from 'ng2-charts';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { drawRoundedEdges } from './chartjs-round-bars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public chartLabels: Label[] = ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader'];
  public chartData: ChartDataSets[] = [
    {data: [26,	21, 35, 42], label: 'Age then', backgroundColor: '#0c7b93', hidden: false},
    {data: [70, 65,	79, 86], label: 'Age in 2021', backgroundColor: '#00a8cc', hidden: false}
  ];
  private color = '#27496d';
  public chartOptions: ChartOptions = {
    // @ts-ignore
    isDoubleSideRounded: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: this.color
          },
          ticks: {
            fontColor: '#00a8cc'
          }
        }],
        yAxes: [{
          gridLines: {
            color: this.color
          },
          ticks: {
            beginAtZero: true,
            fontColor: this.color
          }
        }]
      }
  };

  constructor() {
    Chart.defaults.global.defaultFontFamily = "'Press Start 2P', cursive";
    Chart.elements.Rectangle.prototype.draw = drawRoundedEdges;
  }

  public hideLegend(index: number) {
    if(this.chartData[index].hidden) {
      this.chartData[index].hidden = false;
    }else{
      this.chartData[index].hidden = true;
    }
    this.chart.update();
  }
}
