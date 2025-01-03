import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "desc";
  itemsShowCount = 1;

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemUpdate(count: number): void {
    this.itemsShowCount = count;
    this.columnsCountChange.emit(count);
  }

  onColumnUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
