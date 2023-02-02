import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineTest1Component } from './components/machine-test1/machine-test1.component';
import { Machine2Component } from './components/machine2/machine2.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineTest1Component,
    Machine2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
