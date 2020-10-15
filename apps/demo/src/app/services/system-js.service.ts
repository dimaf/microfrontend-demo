import { Injectable } from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';
import * as DemoSharedLib from '@demo/shared-lib';
import * as AngularMateriaButton from '@angular/material/button';
import * as AngularMaterialIcon from '@angular/material/icon'
import { BehaviorSubject, Observable } from 'rxjs';
const SystemJS = window['System'];
@Injectable({
  providedIn: 'root',
})
export class SystemJsService {

  private modulesSubject: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
  public readonly modules: Observable<Array<string>>=this.modulesSubject.asObservable();
  
  constructor() {
    SystemJS.set('import:angular-core', AngularCore);
    SystemJS.import('import:angular-core');
    SystemJS.set('import:demo-shared-lib', DemoSharedLib);
    SystemJS.import('import:demo-shared-lib');
    SystemJS.set('import:angular-common', AngularCommon);
    SystemJS.import('import:angular-common');
    SystemJS.set('import:angular-material-button', AngularMateriaButton);
    SystemJS.import('import:angular-material-button');
    SystemJS.set('import:angular-material-icon', AngularMaterialIcon);
    SystemJS.import('import:angular-material-icon');
    this.updateEntries();
    
  }
  async loadModule<T>(moduleName: string, componentName: string):Promise<T> {
    return  SystemJS.import(moduleName).then((lib) => {
        this.updateEntries();
        return lib[componentName];
      })
  }
  unloadModule(moduleName:string):boolean{
    const result= !!SystemJS.delete(SystemJS.resolve(moduleName))
    console.log("Unload",moduleName,result)
    this.updateEntries();
    return result;
  }
  unloadModuleByUrl(url:string):boolean{
    const result= !!SystemJS.delete(url)
    console.log("Unload",url,result)
    this.updateEntries();
    return result;
  }
  private updateEntries(){
    const entries:Array<string>=[]
    for (const [id, ns] of SystemJS.entries()) {
      entries.push(id)
    };
    this.modulesSubject.next(entries)
  }
}
