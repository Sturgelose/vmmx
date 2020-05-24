import {Pin} from '../Pin';
export type MeasureConstructor = new (config: MeasureConfig) => Measure;

export interface MeasureConfig {
  measureIndex: number;
  playNote: (time) => void;
}

/**
 * A measure or bar includes a set of notes.
 * 4 if a quarter
 * 3 if a triplet
 *
 * The machine has 64 measures in total
 */
export abstract class Measure {

  private pins: Array<Pin> = [];

  protected constructor(
    private config: MeasureConfig,
    public readonly pinNumber: number,
  ) {
    this.setupMeasure();
  }

  public getPin(pinIndex: number): Pin {
    return this.pins[pinIndex];
  }

  public getPins(): Array<Pin> {
    return this.pins;
  }

  /**
   * Removes all the measure's pins from transport
   */
  public clear() {
    this.pins.forEach(pin => pin.deactivate());
  }

  private setupMeasure() {
    for (let pinIndex = 0; pinIndex < this.pinNumber; pinIndex++) {
      this.pins[pinIndex] = new Pin({ ...this.config, pinIndex });
    }
  }
}
