import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWomenItemComponent } from './product-women-item.component';

describe('ProductWomenItemComponent', () => {
  let component: ProductWomenItemComponent;
  let fixture: ComponentFixture<ProductWomenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWomenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWomenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
