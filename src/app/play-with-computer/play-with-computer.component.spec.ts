import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithComputerComponent } from './play-with-computer.component';

describe('PlayWithComputerComponent', () => {
  let component: PlayWithComputerComponent;
  let fixture: ComponentFixture<PlayWithComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWithComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
