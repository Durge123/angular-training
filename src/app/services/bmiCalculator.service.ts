import { Inject, Injectable } from "@angular/core";
import { ConsoleLoggerService } from "./consoleLogger.service";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class BmiCalculatorService {

    logger: ConsoleLoggerService;

    constructor(@Inject("logger") _logger:ConsoleLoggerService,
                private httpClient: HttpClient){
        this.logger = _logger;
        this.logger.write("in bmi calculator service");
    }

    calculate(height:number, mass:number):Observable<Object> {
        this.logger.write("in bmi calculator service: calulate()");
        return this.httpClient.post("http://localhost:3200/bmi/calculate",{height:height, mass:mass});
    }

    showHistory() {
        // fetch the history of the calcualted results
        return this.httpClient.get('http://localhost:3200/bmi/history');
      }
}