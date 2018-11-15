import { Component, OnInit, HostListener, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { CategoryService, Category, Storefront, ContactService, StorefrontService,
  UserService, ConversionService, CurrencyType, User, MiniProfileComponent, ProductService, Product, Contact } from '@apttus/ecommerce';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { APageInfo } from '@apttus/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchModal') searchModal: ElementRef;
  @ViewChild('profile') profile: MiniProfileComponent;
  @ViewChild('searchBox') searchBox: ElementRef;

  categoryTree$: Observable<Array<Category>>;
  categoryBranch: Array<Category>;
  index: number = 0;
  storefront$: Observable<Storefront>;
  contact$: Observable<Contact>;
  currencyTypes$: Observable<Array<CurrencyType>>;
  searchQuery: string;
  postalCode: number;
  pageTop: boolean = true;
  modalRef: BsModalRef;
  me$: Observable<User>;

  typeahead$: Observable<Array<Product>> = new Observable<Array<Product>>();
  typeaheadLoading: boolean = false;
  keyupEvent: any;

  constructor(private categoryService: CategoryService,
              private storefrontService: StorefrontService,
              private userService: UserService,
              private conversionService: ConversionService,
              private router: Router,
              private productService: ProductService,
              private contactService: ContactService,
              private modalService: BsModalService) {

                this.typeahead$ = Observable.create((observer: any) => {
                  observer.next(this.searchQuery);
                })
                .filter(query => query.trim().length >= 2)
                .flatMap(query => this.productService.search(query, null, 'AND', null, null, new APageInfo(10, 0)));
  }

  ngOnInit() {
    this.storefront$ = this.storefrontService.getStorefront();
    this.categoryTree$ = this.categoryService.getCategoryTree();
    this.contact$ = this.contactService.getMyContact();
    this.categoryTree$.subscribe(r => {
      r.forEach(c => {
        const depth = this.getDepth(c);
        this.categoryBranch = (!this.categoryBranch || depth > this.categoryBranch.length) ? new Array<any>(depth) : this.categoryBranch;
      });
    });
    this.currencyTypes$ = this.conversionService.getConversionRates();
    this.me$ = this.userService.me();
  }

  getDepth(obj) {
    let depth = 0;
    if (obj._children) {
      obj._children.forEach(d => {
        const tmpDepth = this.getDepth(d);
        if (tmpDepth > depth) {
          depth = tmpDepth;
        }
      });
    }
    return 1 + depth;
  }

  openModal(template: TemplateRef<any>) {
    this.searchQuery ="";
    this.modalRef = this.modalService.show(template);
  }

  setCurrency(currency: CurrencyType){
    this.userService.setCurrency(currency.IsoCode).subscribe(() => {});
  }

  setStorefront(storefront: Storefront){
    this.modalRef.hide();
    this.storefrontService.cacheService._set('storefront', storefront.Id, true);
    window.location.reload();
  }

  onSubmit(){
    this.router.navigate(['/search', this.searchQuery]);
  }

  typeaheadOnSelect(evt){
    this.modalRef.hide();
    this.router.navigate(['/product', evt.item[this.productService.config.productIdentifier]]);
  }

  goToAddress(){
     this.router.navigate(['/address']);
  }

  goToCategory(category: Category){
    this.categoryBranch[this.index] = category;
    this.index += 1;
  }

  goBack(){
    this.categoryBranch[this.index] = new Category();
    this.index -= 1;
  }

  doSearch(){
    this.modalRef.hide();
    if(this.searchQuery) this.router.navigate(['/search', this.searchQuery]);
  }

  doLogout(){
    this.profile.doLogout();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
      this.pageTop = window.pageYOffset <= 0;
  }
}
