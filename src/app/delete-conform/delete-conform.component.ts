import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-conform',
  templateUrl: './delete-conform.component.html',
  styleUrls: ['./delete-conform.component.css']
})
export class DeleteConformComponent {
  @Input() item: string | undefined
  @Output() onCancel = new EventEmitter()


  @Output() onDelete = new EventEmitter()

  
  cancel() {

    // to occur user defined events -emit()
    this.onCancel.emit()
  }
  deleteAcc() {
    this.onDelete.emit(this.item)
  }
}
