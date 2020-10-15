import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentHostDirective } from './componentHost.directive';
import { DynamicallyLoaded } from '@demo/shared-lib';
import { SystemJsService } from '../services/system-js.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'demo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  @ViewChild(ComponentHostDirective, { static: true })
  componentHost: ComponentHostDirective;

  childData: string;
  componentInstance: DynamicallyLoaded;
  constructor(
    private systemJsService: SystemJsService,
    private factoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    console.log(route.snapshot.data);
  }

  ngOnInit() {
    this.loadLibrary();
  }

  ngOnDestroy() {
    if (this.componentInstance){
      this.componentInstance.outputEvents.unsubscribe();
    }
  }

  async loadLibrary() {
    const libraryName = this.route.snapshot.data.library;
    const componentName = this.route.snapshot.data.component;
    
    //Load Component dynamically
    const sharedComponentType = await this.systemJsService.loadModule<
      DynamicallyLoaded
    >(libraryName, componentName);
    
    //Dynamically render the component 
    this.componentInstance = this.createComponentInstance<DynamicallyLoaded>(
      sharedComponentType
    );

    //Initialize public properties of the component
    this.componentInstance.data = this.route.snapshot.data.parameter;
    //Subscribe to an event
    this.componentInstance.outputEvents.subscribe(
      (event:string) => {
        this.snackBar.open(`Message from ${event} component`,"X",{
          duration: 2000,
          verticalPosition:'top'
        })
      }
    );
  }

  createComponentInstance<T>(component:any):T {
    const componentFactory = this.factoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.componentHost.viewContainerRef;

    return viewContainerRef.createComponent(componentFactory).instance as T;
  }
}
