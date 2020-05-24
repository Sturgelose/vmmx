import {MMXInstrument} from './MMXInstrument';
import {Instrument} from 'tone/build/esm/instrument/Instrument';
import {FMSynth} from 'tone';

export class VibraphoneInstrument extends MMXInstrument {

  public getInstrumentName(): string {
    return `Vibraphone ${this.note}`;
  }

  protected getToneJSInstrument(): Instrument<any> {
    // https://github.com/Tonejs/Presets/blob/gh-pages/instrument/FMSynth/Kalimba.json
    return new FMSynth({
      harmonicity: 8,
      modulationIndex: 2,
      oscillator : {
        type: 'sine'
      },
      envelope: {
        attack: 0.001,
        decay: 2,
        sustain: 0.1,
        release: 2
      },
      modulation : {
        type : 'square'
      },
      modulationEnvelope : {
        attack: 0.002,
        decay: 0.2,
        sustain: 0,
        release: 0.2
      }
    }).toDestination();
  }

}
