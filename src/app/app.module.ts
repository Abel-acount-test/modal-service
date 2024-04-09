import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModalComponent } from './modal/test-modal/test-modal.component';
import { ModalTestComponent } from './component/modal-test/modal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    ModalTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
