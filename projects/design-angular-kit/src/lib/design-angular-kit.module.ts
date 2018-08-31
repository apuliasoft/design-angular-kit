import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonComponent } from './button/button.component';
import { BadgeDirective } from './badge/badge.directive';
import { FormInputComponent } from './form-input/form-input.component';
import { PasswordStrengthMeterComponent } from './form-input/password-strength-meter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    TooltipComponent,
    FormInputComponent,
    PasswordStrengthMeterComponent
  ],
  exports: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    FormInputComponent
  ],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
