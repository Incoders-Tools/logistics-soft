import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryNoteRoutingModule } from './delivery-note-routing.module';
import { DeliveryNoteComponent } from './delivery-note.component';


import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    DeliveryNoteRoutingModule,
    ToolbarModule,
    SplitButtonModule,
    FileUploadModule,
    ToastModule,
    TableModule
  ],
  declarations: [DeliveryNoteComponent]
})
export class DeliveryNoteModule { }
