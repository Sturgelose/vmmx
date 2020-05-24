import {Component, Input, OnInit} from '@angular/core';
import {MMXInstrument} from '../../vmmx/instruments/MMXInstrument';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {

  @Input() instrument: MMXInstrument;

  constructor() { }

  ngOnInit(): void {}

}
