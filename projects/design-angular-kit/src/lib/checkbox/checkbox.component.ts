import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorBase } from '../value-accessor-base';

@Component({
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CheckboxComponent, multi: true }]
})
export class CheckboxComponent extends ValueAccessorBase<boolean> {
  @Input() label: string;
  @Input() disabled: boolean;

  public identifier = `checkbox-${identifier++}`;
}

let identifier = 0;
