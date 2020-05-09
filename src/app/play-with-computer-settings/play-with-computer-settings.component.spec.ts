import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithComputerSettingsComponent } from './play-with-computer-settings.component';

describe('PlayWithComputerSettingsComponent', () => {
  let component: PlayWithComputerSettingsComponent;
  let fixture: ComponentFixture<PlayWithComputerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWithComputerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithComputerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
