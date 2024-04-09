import { Component, Injectable } from '@angular/core';

//npm install --save-dev @types/bootstrap
import * as bootstrap from 'bootstrap';

//componente
@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
//servicio
@Injectable({
  providedIn: 'root'
})
export class ModalTestComponent {

  /**solo LLama los modales de su Plantill HRML */
  public viewModal1(): void {
    const modalElement = document.getElementById('modal1');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'modal1'");
    }
  }
  public viewModal2(): void {
    const modalElement = document.getElementById('modal2');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'exampleModal'");
    }
  }
  public viewModal3(): void {
    const modalElement = document.getElementById('modal3');

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error("No se encontró ningún elemento con el ID 'exampleModal'");
    }
  }
}
