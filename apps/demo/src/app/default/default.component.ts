import { Component, OnInit } from '@angular/core';
import { SystemJsService } from '../services/system-js.service';

@Component({
  selector: 'demo-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(  public systemJsService: SystemJsService) { }

  ngOnInit(): void {
  }

}
