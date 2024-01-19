import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchedComponent } from './data-fetched.component';

describe('DataFetchedComponent', () => {
  let component: DataFetchedComponent;
  let fixture: ComponentFixture<DataFetchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataFetchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
