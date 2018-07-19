import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { TooltipExamplesComponent } from './tooltip-examples/tooltip-examples.component';
import { TooltipIndexComponent } from './tooltip-index/tooltip-index.component';
import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { TooltipPlacementsExampleComponent } from './tooltip-placements-example/tooltip-placements-example.component';
import { TooltipEventsExampleComponent } from './tooltip-events-example/tooltip-events-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignAngularKitModule,
    SharedModule,
    TooltipRoutingModule
  ],
  declarations: [
    TooltipExampleComponent, TooltipExamplesComponent, TooltipIndexComponent,
    TooltipPlacementsExampleComponent, TooltipEventsExampleComponent
  ]
})
export class TooltipModule { }
