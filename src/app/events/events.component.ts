import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit  {

  constructor(private eventService: EventsService){}

  events : any[] = [];

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log("event list: ", this.events);
    });
  }


  getSponsorList(id: number){
    for (let index = 0; index < this.events.length; index++) {
      const element = this.events[index];
      if(element.id == id){
        console.log("hre:" , element);
        var res = ""; 
        for(let i = 0 ; i < element.sponsors.length; i++){
          res += element.sponsors[i].name + ", ";
        }
        return res; 
      }
    }
    return "anyhting "; 
  }
}
