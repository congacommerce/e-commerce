import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService, OrderService, ContactService, UserService, AccountService, EmailService } from '@congacommerce/ecommerce';
import { ConfigurationService } from '@congacommerce/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [ RouterTestingModule, TranslateModule.forRoot() ],
      providers: [
        { provide: CartService, useValue: { getMyCart: () => of(null), onCartError: of(null) } },
        { provide: ConfigurationService, useValue: { get: () => null, proxyEndpoint: () => '', endpoint: () => '' } },
        { provide: OrderService, useValue: {} },
        { provide: BsModalService, useValue: {} },
        { provide: ContactService, useValue: { getMyContact: () => of(null) } },
        { provide: TranslateService, useValue: { instant: () => '', stream: () => of('') } },
        { provide: UserService, useValue: { getCurrentUserLocale: () => of('en'), me: () => of(null), getCurrentUser: () => of(null) } },
        { provide: AccountService, useValue: {} },
        { provide: EmailService, useValue: {} },
        { provide: ToastrService, useValue: { error: () => {}, success: () => {}, warning: () => {}, info: () => {} } },
        { provide: 'ExceptionService', useValue: {} },
        { provide: 'configuration', useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
