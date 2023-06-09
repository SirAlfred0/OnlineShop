import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {

  @Output('onToggle') onToggle: EventEmitter<void> = new EventEmitter<void>

  onSideNavToggle()
  {
    this.onToggle.emit();
  }
}
