import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { BmiCalculationContainerModule } from './bmi-calculation-container/bmi-calculation-container.module';
import { OutputComponent } from './output/output.component';
import { ConsoleLoggerService } from './services/consoleLogger.service';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
    AccountsModule,
    BmiCalculationContainerModule
  ],
  providers: [
    {useClass: ConsoleLoggerService, provide: ConsoleLoggerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
