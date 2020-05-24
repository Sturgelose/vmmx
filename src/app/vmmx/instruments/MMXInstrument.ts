import {Channel} from '../Channel';
import {Instrument} from 'tone/build/esm/instrument/Instrument';
import {Frequency} from 'tone/build/esm/core/type/Units';

type InstrumentChannel = 0 | 1;
const DEFAULT_DURATION = '4n';

/**
 * Each instrument has two channels and has an instrument associated
 * Inside each channel, there are 64 measures containing either 4 or 3 pins
 */
export abstract class MMXInstrument {

  channels: [Channel, Channel];

  constructor(
    protected note: Frequency,
    protected duration = DEFAULT_DURATION,
    ) {
    this.setupInstrument();
  }

  private setupInstrument() {
    this.channels = [
      new Channel(this.playSingleNote()),
      new Channel(this.playSingleNote())
    ];
  }

  protected abstract getToneJSInstrument(): Instrument<any>;
  public abstract getInstrumentName(): string;

  protected playSingleNote = (): ((time) => void) =>  {
    const instrument = this.getToneJSInstrument();
    return (time): void => {
      instrument.triggerAttackRelease(this.note, this.duration, time);
    };
  }

  getChannel(channelNumber: InstrumentChannel) {
    return this.channels[channelNumber];
  }

}
