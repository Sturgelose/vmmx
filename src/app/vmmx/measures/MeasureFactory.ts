import {QuarterMeasure} from './Quarter';
import {TripletMeasure} from './Triplet';
import {Measure, MeasureConfig, MeasureConstructor} from './Measure';

export type MeasureType = 'quarter' | 'triple';
export const MEASURE_MAPPING: { [key in MeasureType]: MeasureConstructor } = {
  ['quarter']: QuarterMeasure,
  ['triple']: TripletMeasure,
};

export function makeMeasure(measuretype: MeasureType, config: MeasureConfig): Measure {
  return new MEASURE_MAPPING[measuretype](config);
}
