import {MMXInstrument} from './MMXInstrument';
import {Synth} from 'tone';
import {Instrument} from 'tone/build/esm/instrument/Instrument';

export class MockInstrument extends MMXInstrument {

  public protected getInstrumentName(): string {
    return `Mock ${this.note}`;
  }

  protected getToneJSInstrument(): Instrument<any> {
    return new Synth().toDestination();
  }

}
