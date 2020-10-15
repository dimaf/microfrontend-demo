import { Component } from '@angular/core';
import { SharedService, DynamicallyLoaded } from '@demo/shared-lib';
import { MatDialog } from '@angular/material/dialog';
import { SystemJsService } from './services/system-js.service';
import { ComponentType } from '@angular/cdk/portal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public shared: SharedService,
    private dialog: MatDialog,
    private systemJsService: SystemJsService,
    private snackBar: MatSnackBar
  ) {}
  async openDialog() {
    const componentType = await this.systemJsService.loadModule<
      ComponentType<unknown>
    >('dynamic-lib', 'DynamicallyLoadedComponentComponent');

    const box = this.dialog.open(componentType);
    const component= box.componentInstance as DynamicallyLoaded;
    component.data = 'flight_land';
    component.outputEvents.subscribe((event: string) => {
      this.snackBar.open(`Message from ${event} component`, 'X', {
        duration: 2000,
        verticalPosition: 'top',
      });
    });

  }
  unloadModule() {
    const unloaded = this.systemJsService.unloadModule('dynamic-lib');
    this.snackBar.open(`Module unloaded ${unloaded}`, 'X', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
