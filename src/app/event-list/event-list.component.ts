import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventContract, StatisticsModel } from 'src/services/data-contracts';
import { Events } from 'src/services/Events';
import { EventService } from 'src/services/EventService';
import { Statistics } from 'src/services/Statistics';
import { StatisticsService } from 'src/services/StatisticsService';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit {
  id: string = "";
  events = new Array<EventContract>();
  statistics : StatisticsModel = {};


  constructor(private route: ActivatedRoute, private router: Router,
    private eventService: EventService,
    private statisticsService : StatisticsService) { }

  async ngOnInit() {
    this.route.params.subscribe(_ => {
      this.loadData();
    }); 
  }

  async loadData() {   
    this.id = this.route.snapshot.paramMap.get('id')!;

    const statResult = await this.statisticsService.statisticsGet(this.id);
    this.statistics = statResult.data;
    const eventsResult = await this.eventService.eventsGetList(this.id);
    this.events = eventsResult.data;
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
