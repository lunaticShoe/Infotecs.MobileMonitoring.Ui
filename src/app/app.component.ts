import { Component, OnInit } from '@angular/core';
import { StatisticsModel } from '../services/data-contracts'
import { Statistics } from '../services/Statistics'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {  
  title = 'Infotecs.MobileMonitoring.Ui';
  // statisticsItems : [StatisticsModel] = [
  //   {
  //     id: "d16f805b-6c6e-4397-a8e2-519278c52356",
  //     userName: "Richards Baxter",
  //     clientVersion: "3.3.2.35640",
  //     osName: "Windows",
  //     createdAt: "2022-01-11T18:04:33.7598520+03:00"
  //   }
  // ];
  statisticsItems = new Array<StatisticsModel>();

  async ngOnInit() {
    const statistics = new Statistics({
      baseUrl: 'http://localhost:5136'
    })
    const resultItems = await statistics.listList();
    this.statisticsItems = resultItems.data;
  }
  getDisplayDate(dateText: any) {
    if (dateText === undefined || !dateText) return ''
    
    const zeroPad = (num: number, places: number) => 
      String(num).padStart(places, '0')

    const date1 = new Date(dateText)
    return `${zeroPad(date1.getDate(), 2)}.${zeroPad(date1.getMonth() + 1, 2)}.${date1.getFullYear()} ` // дата
    + `${zeroPad(date1.getHours(), 2)}:${zeroPad(date1.getMinutes(), 2)}:${zeroPad(date1.getSeconds(), 2)}` // время
  }
}
