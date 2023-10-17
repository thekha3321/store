import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'sort'
  itemsShowCount = 12

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }
  onItemUpdate(count: number): void {
    this.itemsShowCount = count
  }
  onColumnUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
