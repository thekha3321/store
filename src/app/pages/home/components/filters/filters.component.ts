import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent  {
  console = console;
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  onShowCategory(category : string): void {
    this.showCategory.emit(category)
  }

}
