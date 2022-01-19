import { Injectable } from "@angular/core";
import { Statistics } from "./Statistics";

@Injectable({ providedIn: 'root' })
export class StatisticsService extends Statistics<unknown> {
    /**
     *
     */
    constructor() {
        super({
            baseUrl: 'http://localhost:5136'
        });
        
    }
}