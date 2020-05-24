import { Component, OnInit } from '@angular/core';
import {VMMX} from '../../vmmx/VMMX';
import {Transport} from 'tone';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  machine = new VMMX();

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.configureDemoSong();
  }

  private configureDemoSong() {
    for (let i = 0; i < 100; i++) {
      const pin = (i % 2) * 2;
      const instrument = i % 10;
      const measure = Math.floor(i / 2) % 64;

      this.machine.getInstrument(instrument).getChannel(0).getMeasure(measure).getPin(pin).activate();
      console.log(`Measure: ${measure} | Pin: ${pin} | Instrument: ${instrument}`);
    }
  }

  setBPM(event: Event) {
    this.machine.bpm = (event.target as HTMLInputElement).valueAsNumber;
    console.log(`New BPM: ${Transport.bpm.value}`);
  }

}
