import { Component, Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ModalTestComponent {
  protected viewModal1(): void {
    const modalElement = document.getElementById('modal1');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'exampleModal'");
    }

  }
  protected viewModal2(): void {
    const modalElement = document.getElementById('modal2');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'exampleModal'");
    }
  }
  protected viewModal3(): void {
    const modalElement = document.getElementById('modal3');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'exampleModal'");
    }
  }
}
