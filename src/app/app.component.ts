import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashbard/server-status/server-status.component";
import { TicketsComponent } from "./dashbard/tickets/tickets.component";
import { TrafficComponent } from "./dashbard/traffic/traffic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TicketsComponent, TrafficComponent],
})
export class AppComponent {
  
}
