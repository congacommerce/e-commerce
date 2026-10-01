import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService, CategoryService, ProductService, SearchService } from '@congacommerce/ecommerce';
import { TranslateModule } from '@ngx-translate/core';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [ RouterTestingModule, TranslateModule.forRoot() ],
      providers: [
        { provide: CartService, useValue: { getMyCart: () => of(null) } },
        { provide: CategoryService, useValue: { getCategoryByName: () => of(null) } },
        { provide: ProductService, useValue: { getProducts: () => of({ Products: [] }), query: () => of([]) } },
        { provide: SearchService, useValue: { searchProducts: () => of([]) } },
        { provide: 'configuration', useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
