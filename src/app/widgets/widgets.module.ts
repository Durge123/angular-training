import { NgModule } from '@angular/core';
import { AppbannerComponent } from './components/appBanner/appbanner.component';
import { AppfooterComponent } from './components/appFooter/appfooter.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppbannerComponent, AppfooterComponent, TimerComponent],
  imports: [FormsModule],
  providers: [],
  bootstrap: [],
  exports: [AppbannerComponent, AppfooterComponent, TimerComponent]
})
export class WidgetsModule { }
