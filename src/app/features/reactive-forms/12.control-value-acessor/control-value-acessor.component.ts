import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagsComponent } from './tags/tags.component';

@Component({
  selector: 'app-control-value-acessor',
  imports: [ TagsComponent ],
  templateUrl: './control-value-acessor.component.html',
  styleUrl: './control-value-acessor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAcessorComponent {

}
