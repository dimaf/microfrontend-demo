import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { ComponentHostDirective } from './container/componentHost.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Routing } from './app.routing';
import {SystemJsService} from './services/system-js.service'
import { SharedService} from '@demo/shared-lib';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DefaultComponent } from './default/default.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatListModule} from '@angular/material/list'
@NgModule({
  declarations: [AppComponent, ContainerComponent,ComponentHostDirective, DefaultComponent],
  imports: [BrowserModule,HttpClientModule, BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatSnackBarModule,MatDialogModule,MatListModule,
    Routing],
  providers: [SystemJsService,SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
