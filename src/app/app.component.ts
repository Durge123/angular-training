import { Component } from '@angular/core';
import { ConsoleLoggerService } from './services/consoleLogger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  logger: ConsoleLoggerService

  constructor(_logger: ConsoleLoggerService){
    this.logger = _logger
    this.logger.write("in app component");
  }
}
