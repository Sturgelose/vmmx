import {MeasureConfig} from './measures/Measure';
import {Time, Transport} from 'tone';

export interface PinConfig extends MeasureConfig {
  pinIndex: number;
}

/**
 * A pin represents a potential note in the machine
 * There are quarter and triplet pins
 */
export class Pin {

  private reference: number = null;

  constructor(
    private readonly config: PinConfig,
  ) {}

  public activate(): void {
    this.reference = Transport.schedule(
      this.config.playNote,
      this.calculateNoteTiming(this.config.measureIndex, this.config.pinIndex),
    );
  }

  public toogle(): void {
    if (this.isActive()) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  protected calculateNoteTiming(measureIndex: number, pinIndex: number): any {
    return Time({
      '1m': measureIndex ,
      '4n': pinIndex,
    });
  }

  public isActive() {
    return this.reference !== null;
  }

  public deactivate(): void {
    Transport.clear(this.reference);
    this.reference = null;
  }
}
