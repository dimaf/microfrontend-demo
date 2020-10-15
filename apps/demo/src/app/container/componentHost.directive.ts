import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[demoComponentHost]',
})
export class ComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}