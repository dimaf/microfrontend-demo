import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicallyLoaded,SharedService} from '@demo/shared-lib';
import { format } from 'date-fns'
@Component({
  selector: 'demo-dynamically-loaded-component',
  templateUrl: './dynamically-loaded-component.component.html',
  styleUrls: ['./dynamically-loaded-component.component.scss'],
})
export class DynamicallyLoadedComponentComponent
  implements OnInit, DynamicallyLoaded {
  @Input() data: string;
  @Output() outputEvents: EventEmitter<string> = new EventEmitter();
  public message;
  constructor(public shared:SharedService) {
    this.message=format(new Date(), "dddd HH:mm:ss")
  }

  ngOnInit(): void {}
  fireEvent(): void {
    this.outputEvents.emit(this.data);
  }
}
