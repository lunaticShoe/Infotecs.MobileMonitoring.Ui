import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, Subject, switchMap, takeUntil, tap,map } from 'rxjs';
import { EventContract, StatisticsModel } from 'src/services/data-contracts';
import { EventService } from 'src/services/EventService';
import { StatisticsService } from 'src/services/StatisticsService';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit, OnDestroy {
  id: string = "";
  events = new Array<EventContract>();
  statistics : StatisticsModel = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private router: Router,
    private eventService: EventService,
    private statisticsService : StatisticsService) { }
    

  ngOnInit() {    
    this.route.params
      .pipe(
        switchMap(x => this.loadData(x['id'])),
        takeUntil(this.destroy$))
        .subscribe(); 
    console.debug("subscribed")
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    console.debug("unsubscribed")
  }

  loadData(id: string) : Observable<void> {   
    return combineLatest([this.statisticsService.statisticsGet(id), this.eventService.eventsGetList(id)])
      .pipe(
        tap(([statRes, eventRes]) => {
          this.statistics = statRes.data;
          this.events = eventRes.data;
        }),
        map(() => { }));
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
