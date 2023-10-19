import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnInit, OnDestroy  {
  console = console;
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubcription  : Subscription | undefined
  categories : Array<string> | undefined;

  onShowCategory(category : string): void {
    this.showCategory.emit(category)
  }
  constructor (private storeService : StoreService) {

  }
  ngOnInit(): void {
    this.categoriesSubcription = this.storeService.getAllCategories()
    .subscribe(response => {
      this.categories = response
    })
  }
  ngOnDestroy(): void {
    if (this.categoriesSubcription) {
      this.categoriesSubcription.unsubscribe()
    }
  }
}
