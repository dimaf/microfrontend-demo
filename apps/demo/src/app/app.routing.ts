import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DefaultComponent },
  {path: 'arrivals', component: ContainerComponent , data:{ component: 'DynamicallyLoadedComponentComponent',library:"dynamic-lib",parameter:"flight_land" }},
  {path: 'departures', component: ContainerComponent , data:{ component: 'DynamicallyLoadedComponentComponent',library:"dynamic-lib",parameter:"flight_takeoff" }},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const Routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
