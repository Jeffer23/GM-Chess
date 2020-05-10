import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessDialogComponent } from './chess-dialog.component';

describe('ChessDialogComponent', () => {
  let component: ChessDialogComponent;
  let fixture: ComponentFixture<ChessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
