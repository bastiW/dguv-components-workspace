import { NgModule } from '@angular/core';
import { DguvSampleComponent } from './DGUV-sample-component/dguv-sample-components.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DguvSampleComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    DguvSampleComponent,
  ]
})
export class DguvComponentsModule { }
