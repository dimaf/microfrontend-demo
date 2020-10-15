import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicallyLoadedComponentComponent } from './dynamically-loaded-component/dynamically-loaded-component.component';
import {SharedLibModule} from '@demo/shared-lib'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  imports: [CommonModule,SharedLibModule,MatButtonModule,MatIconModule],
  declarations: [DynamicallyLoadedComponentComponent],
})
export class DynamicLibModule {}
