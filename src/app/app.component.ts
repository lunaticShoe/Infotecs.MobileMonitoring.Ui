import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatisticsModel } from '../services/data-contracts'
import { StatisticsService } from 'src/services/StatisticsService';
import { interval, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {  
  title = 'Infotecs.MobileMonitoring.Ui';
  statisticsItems = new Array<StatisticsModel>();
  autoUpdate$ = new Subject<boolean>();

  constructor(private statisticsService : StatisticsService) { }

  ngOnDestroy() {
    this.autoUpdate$.complete()
  }

  async ngOnInit() {    
    await this.GetData();
    this.autoUpdate$
      .pipe(
        switchMap(x => !!x
          ? interval(1000)
            .pipe(
              switchMap(x => this.GetData())
            ) : of())
      )
      .subscribe()
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
    this.autoUpdate$.next(changed.target.checked)
    console.debug("autoUpdateChanged", changed.target.checked)
  }

  trackByFn(index : any, item : StatisticsModel) {
    return item.id;
  }
}
