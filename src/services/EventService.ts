import { Injectable } from "@angular/core";
import { Events } from "./Events";

@Injectable({ providedIn: 'root' })
export class EventService extends Events<unknown> {
    /**
     *
     */
    constructor() {
        super({
            baseUrl: 'http://localhost:5136'
        });
        
    }
}