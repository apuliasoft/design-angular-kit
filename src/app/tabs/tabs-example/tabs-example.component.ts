import { Component } from '@angular/core';

@Component({
  selector: 'it-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent {

  tabs = [
    {
      label: 'tab1',
      content: 'content1'
    },
    {
      label: 'tab2',
      content: 'content2'
    },
    {
      label: 'tab3',
      content: 'content3'
    }
  ];

}
