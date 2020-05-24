import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../../vmmx/Channel';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  @Input() channel: Channel;
  @Input() channelId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
