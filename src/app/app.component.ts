import { Component } from '@angular/core';
import { ModalTestComponent } from './component/modal-test/modal-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //inyectamos nuestro componente servicio
  constructor(private modalTestComponent:ModalTestComponent){}

  //usamos sus metodos
  viewModal1(){
    this.modalTestComponent.viewModal1();
  }
  viewModal2(){
    this.modalTestComponent.viewModal2();
  }
  viewModal3(){
    this.modalTestComponent.viewModal3();
  }
}
