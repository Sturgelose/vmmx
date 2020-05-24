import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './components/machine/machine.component';
import { InstrumentComponent } from './components/instrument/instrument.component';
import { ChannelComponent } from './components/channel/channel.component';
import { MeasureComponent } from './components/measure/measure.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    InstrumentComponent,
    ChannelComponent,
    MeasureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
