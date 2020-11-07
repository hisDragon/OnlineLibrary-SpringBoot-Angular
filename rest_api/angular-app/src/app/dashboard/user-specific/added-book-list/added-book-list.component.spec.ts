import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedBookListComponent } from './added-book-list.component';

describe('AddedBookListComponent', () => {
  let component: AddedBookListComponent;
  let fixture: ComponentFixture<AddedBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
