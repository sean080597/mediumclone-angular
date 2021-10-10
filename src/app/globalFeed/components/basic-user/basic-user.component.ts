import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BasicUserInterface } from "src/app/globalFeed/types/basic-user.interface";

@Component({
  selector: 'mc-basic-user',
  templateUrl: './basic-user.component.html',
  styleUrls: ['./basic-user.component.scss']
})
export class BasicUserComponent {
  @Input() user: BasicUserInterface

  @Output() userEvent: EventEmitter<BasicUserInterface>

  constructor() {
    this.user = {} as BasicUserInterface
    this.userEvent = new EventEmitter<BasicUserInterface>()
  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user)
  }
}
