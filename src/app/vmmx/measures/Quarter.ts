import {Measure, MeasureConfig} from './Measure';

export class QuarterMeasure extends Measure {

  constructor(config: MeasureConfig) {
    super(config, 4);
  }
}
