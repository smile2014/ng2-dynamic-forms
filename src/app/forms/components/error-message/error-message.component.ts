import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-form-error-message',
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() message: string;
}
