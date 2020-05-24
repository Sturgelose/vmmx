import {Measure, MeasureConfig} from './Measure';

export class TripletMeasure extends Measure {

  constructor(config: MeasureConfig) {
    super(config, 3);
  }
}
