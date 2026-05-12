import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sync-validators',
  imports: [FormsModule, JsonPipe],
  templateUrl: './sync-validators.component.html',
  styleUrl: './sync-validators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncValidatorsComponent {

    protected message = signal('');
}
