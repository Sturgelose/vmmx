import {MMXInstrument} from './MMXInstrument';
import {Synth} from 'tone';
import {Instrument} from 'tone/build/esm/instrument/Instrument';

export class MockInstrument extends MMXInstrument {

  protected getInstrument(): Instrument<any> {
    return new Synth().toDestination();
  }

}
