import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.module";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 500, 4: 500 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 1;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = "desc";
  count = "12";
  productSubcription: Subscription | undefined;
  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productSubcription = this.storeService
      .getAllProduct(this.count, this.sort, this.category)
      .subscribe((_product) => {
        this.products = _product;
      });
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
  ngOnDestroy(): void {
    if (this.productSubcription) {
      this.productSubcription.unsubscribe();
    }
  }
  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }
  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }
}
