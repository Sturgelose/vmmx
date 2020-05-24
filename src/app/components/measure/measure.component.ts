import {Component, Input, OnInit} from '@angular/core';
import {Measure} from '../../vmmx/measures/Measure';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent implements OnInit {

  @Input() measure: Measure;

  constructor() { }

  ngOnInit(): void {
  }

}
