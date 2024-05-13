import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DeliveryNoteComponent implements OnInit {

  items: MenuItem[] = [];

  uploadedFiles: any[] = [];

  products: Product[] = [];

  isExpanded: boolean = false;

  expandedRows: expandedRows = {};

  @ViewChild('filter') filter!: ElementRef;

  constructor(private messageService: MessageService, private productService: ProductService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Confeccion Manual', icon: 'pi pi-external-link' },
      { label: 'Confeccion Masiva', icon: 'pi pi-bookmark' }
    ];

    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
  }

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
