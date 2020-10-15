import { EventEmitter, Type } from '@angular/core';

export interface DynamicallyLoaded {
    data:string
    outputEvents: EventEmitter<string>
}
