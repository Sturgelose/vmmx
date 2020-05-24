import {Measure} from './measures/Measure';
import {QuarterMeasure} from './measures/Quarter';
import {makeMeasure, MeasureType} from './measures/MeasureFactory';

const MEASURE_COUNT = 64;
const DEFAULT_MEASURE = QuarterMeasure;

export class Channel {

  private measures: Array<Measure> = [];

  constructor(
    private playNote: (time) => void,
  ) {
    this.setupMeasures();
  }

  private setupMeasures() {
    for (let i = 0; i < MEASURE_COUNT; i++) {
      this.measures[i] = new DEFAULT_MEASURE({ measureIndex: i, playNote: this.playNote });
    }
  }

  setMeasureType(measureType: MeasureType, measureIndex: number) {
    this.measures[measureIndex].clear();
    this.measures[measureIndex] = makeMeasure(measureType, { measureIndex, playNote: this.playNote });
  }

  getMeasure(measureIndex: number) {
    return this.measures[measureIndex];
  }
}
