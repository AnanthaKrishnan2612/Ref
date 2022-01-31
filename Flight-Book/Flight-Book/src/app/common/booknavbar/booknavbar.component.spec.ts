import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknavbarComponent } from './booknavbar.component';

describe('BooknavbarComponent', () => {
  let component: BooknavbarComponent;
  let fixture: ComponentFixture<BooknavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooknavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
