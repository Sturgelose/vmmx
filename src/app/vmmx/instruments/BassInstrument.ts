import {MMXInstrument} from './MMXInstrument';
import {AMSynth} from 'tone';
import {Instrument} from 'tone/build/esm/instrument/Instrument';

export class BassInstrument extends MMXInstrument {
  public protected getInstrumentName(): string {
    return `Bass ${this.note}`;
  }

  protected getToneJSInstrument(): Instrument<any> {
    return new AMSynth({
      harmonicity: 3.999,
      oscillator: {
        type: 'square'
      },
      envelope: {
        attack: 0.03,
        decay: 0.3,
        sustain: 0.7,
        release: 0.8
      },
      modulation : {
        volume : 12,
        type: 'square6'
      },
      modulationEnvelope : {
        attack: 2,
        decay: 3,
        sustain: 0.8,
        release: 0.1
      }
    }).toDestination();
  }

}
