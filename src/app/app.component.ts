import { Component, OnInit } from '@angular/core';
import { StatisticsModel } from '../services/data-contracts'
import { Statistics } from '../services/Statistics'
import { StatisticsService } from 'src/services/StatisticsService';
import { interval, Subscription } from 'rxjs';

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
  autoUpdateSubscription! : Subscription;


  constructor(private statisticsService : StatisticsService) {
    
    
  }

  async ngOnInit() {    
    await this.GetData();
  }
  
  private async GetData() {
    const resultItems = await this.statisticsService.statisticsGetList();
    this.statisticsItems = resultItems.data;
    console.debug("Data received");
  }

  getDisplayDate(dateText: any) {
    if (dateText === undefined || !dateText) return ''
    
    const zeroPad = (num: number, places: number) => 
      String(num).padStart(places, '0')

    const date1 = new Date(dateText)
    return `${zeroPad(date1.getDate(), 2)}.${zeroPad(date1.getMonth() + 1, 2)}.${date1.getFullYear()} ` // дата
    + `${zeroPad(date1.getHours(), 2)}:${zeroPad(date1.getMinutes(), 2)}:${zeroPad(date1.getSeconds(), 2)}` // время
  }

  autoUpdateChanged(changed: any) {
    console.debug(changed.target.checked)
    
    if (!changed.target.checked) {
      this.autoUpdateSubscription?.unsubscribe();
      return;
    }

    this.autoUpdateSubscription = 
      interval(500)
        .subscribe(async () => {
          await this.GetData();
        })
  }

  trackByFn(index : any, item : StatisticsModel) {
    return item.id;
  }
}
