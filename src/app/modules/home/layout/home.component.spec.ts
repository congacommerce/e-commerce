import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { StorefrontService, CartService, CategoryService, ProductService } from '@congacommerce/ecommerce';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: StorefrontService, useValue: { getStorefront: () => of(null) } },
        { provide: CartService, useValue: { getMyCart: () => of(null) } },
        { provide: CategoryService, useValue: { getCategories: () => of([]) } },
        { provide: ProductService, useValue: { getProducts: () => of({ Products: [] }) } },
        { provide: 'configuration', useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
