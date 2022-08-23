import { NgModule } from '@angular/core';
import { AppbannerComponent } from './components/appBanner/appbanner.component';
import { AppfooterComponent } from './components/appFooter/appfooter.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppbannerComponent, AppfooterComponent, BmiComponent],
  imports: [FormsModule],
  providers: [],
  bootstrap: [],
  exports: [AppbannerComponent, AppfooterComponent, BmiComponent]
})
export class WidgetsModule { }
