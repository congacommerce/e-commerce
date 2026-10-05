import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AttachmentService } from '@congacommerce/ecommerce';
import { AttachmentComponent } from './attachment.component';

describe('AttachmentComponent', () => {
  let component: AttachmentComponent;
  let fixture: ComponentFixture<AttachmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentComponent ],
      providers: [
        { provide: AttachmentService, useValue: {} },
        { provide: 'configuration', useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
