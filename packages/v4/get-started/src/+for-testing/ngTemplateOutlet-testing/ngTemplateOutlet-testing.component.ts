import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'ngTemplateOutlet-testing',
  templateUrl: './ngTemplateOutlet-testing.component.html'
})
export class NgTemplateOutletTestingComponent{
  @ContentChild(TemplateRef)
  tmpl: TemplateRef<any>;

  items: any[] = [
    {name: 'react'},
    {name: 'angular'},
    {name: 'rxjs'}
  ];

}
