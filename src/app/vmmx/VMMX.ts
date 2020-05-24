import {start, Transport} from 'tone';
import {VibraphoneInstrument} from './instruments/VibraphoneInstrument';
import {BassInstrument} from './instruments/BassInstrument';
import {MockInstrument} from './instruments/MockInstrument';
import {MMXInstrument} from './instruments/MMXInstrument';

export enum Instruments {
  VIBRAPHONE_1,
  VIBRAPHONE_2,
  VIBRAPHONE_3,
  VIBRAPHONE_4,
  VIBRAPHONE_5,
  VIBRAPHONE_6,
  VIBRAPHONE_7,
  VIBRAPHONE_8,
  VIBRAPHONE_9,
  VIBRAPHONE_10,
  VIBRAPHONE_11,
  DRUM_KICK,
  DRUM_SNARE,
  DRUM_HIHAT,
  DRUM_CYMBAL,
  BASS_E,
  BASS_A,
  BASS_D,
  BASS_G,
}

const DEFAULT_BPM = 120;


/**
 * Vibraphone: 11 notes, 2 channels each = 22 channels
 * Bass: 4 notes, 2 channels each = 8 channels
 * Drums: 4 notes, 2 channels each = 8 channels
 *
 * Total: 38 channels in 19 notes (2 channels per note)
 * Double channels are used for fast speed
 */
export class VMMX {

  private instruments: Array<any> = [];

  set bpm(bpm: number) {
    Transport.bpm.value = bpm;
  }

  get bpm(): number {
    return Transport.bpm.value;
  }

  set loop(doLoop: boolean) {
    Transport.loop = doLoop;
  }

  get loop(): boolean {
    return Transport.loop;
  }

  constructor(
    bpm: number = DEFAULT_BPM,
    loop: boolean = true,
    ) {
    this.bpm = bpm;
    this.loop = loop;
    this.setUpMachine();
  }

  private setUpMachine() {
    // @ts-ignore
    Transport.loopEnd = {
      '1m': 64,
    };

    this.instruments[Instruments.VIBRAPHONE_1] = new VibraphoneInstrument('C1');
    this.instruments[Instruments.VIBRAPHONE_2] = new VibraphoneInstrument('D1');
    this.instruments[Instruments.VIBRAPHONE_3] = new VibraphoneInstrument('E1');
    this.instruments[Instruments.VIBRAPHONE_4] = new VibraphoneInstrument('F1');
    this.instruments[Instruments.VIBRAPHONE_5] = new VibraphoneInstrument('G1');
    this.instruments[Instruments.VIBRAPHONE_6] = new VibraphoneInstrument('A1');
    this.instruments[Instruments.VIBRAPHONE_7] = new VibraphoneInstrument('B1');
    this.instruments[Instruments.VIBRAPHONE_8] = new VibraphoneInstrument('C2');
    this.instruments[Instruments.VIBRAPHONE_9] = new VibraphoneInstrument('D2');
    this.instruments[Instruments.VIBRAPHONE_10] = new VibraphoneInstrument('E2');
    this.instruments[Instruments.VIBRAPHONE_11] = new VibraphoneInstrument('F2');

    this.instruments[Instruments.DRUM_KICK] = new MockInstrument('C1');
    this.instruments[Instruments.DRUM_SNARE] = new MockInstrument('C2');
    this.instruments[Instruments.DRUM_HIHAT] = new MockInstrument('C3');
    this.instruments[Instruments.DRUM_CYMBAL] = new MockInstrument('C4');

    this.instruments[Instruments.BASS_E] = new BassInstrument('E1');
    this.instruments[Instruments.BASS_A] = new BassInstrument('A1');
    this.instruments[Instruments.BASS_D] = new BassInstrument('D1');
    this.instruments[Instruments.BASS_G] = new BassInstrument('G1');
  }

  public getInstrument(instrumentId: Instruments): MMXInstrument {
    return this.instruments[instrumentId];
  }

  public getInstruments(): Array<MMXInstrument> {
    return this.instruments;
  }

  public async start(): Promise<void> {
    await start();
    Transport.start();
  }

  public stop(): void {
    Transport.stop();
  }
}
