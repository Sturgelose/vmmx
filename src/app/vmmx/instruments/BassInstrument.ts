import {MMXInstrument} from './MMXInstrument';
import {MonoSynth} from 'tone';
import {Instrument} from 'tone/build/esm/instrument/Instrument';

export class BassInstrument extends MMXInstrument {
  protected getInstrument(): Instrument<any> {
    return new MonoSynth({
      oscillator: {
        type: 'fmsquare5',
        modulationType : 'triangle',
        modulationIndex : 2,
        harmonicity : 0.501
      },
      filter: {
        Q: 1,
        type: 'lowpass',
        rolloff: -24
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.4,
        release: 2
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.8,
        release: 1.5,
        baseFrequency: 50,
        octaves: 4.4
      }
    });
  }

}
