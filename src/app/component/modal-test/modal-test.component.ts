import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ModalTestComponent {
  protected viewModal1():void{
  }
  protected viewModal2():void{
  }
  protected viewModal3():void{
  }
}
