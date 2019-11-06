import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let minutes: any;
  let seconds: any;
  let startButton: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    minutes = fixture.debugElement.queryAll(By.css('#minutes'))[0].nativeElement;
    seconds = fixture.debugElement.queryAll(By.css('#seconds'))[0].nativeElement;
    startButton = fixture.debugElement.queryAll(By.css('#start'))[0].nativeElement;
    fixture.detectChanges();
  });

  it('time variables should be pre-assigned', () => {
    expect(component.minutes).toEqual(25);
    expect(component.seconds).toEqual(0);
    expect(component.started).toEqual(false);
  });

  it('check resetVariables', () => {
    component.resetVariables(30, 15, false);
    expect(component.minutes).toEqual(30);
    expect(component.seconds).toEqual(15);
    expect(component.started).toEqual(false);
  });

  it('check time edit functions', () => {
    component.addFive();
    expect(component.minutes).toEqual(30);
    component.minusFive();
    expect(component.minutes).toEqual(25);
  });

  it('check start and stop', () => {
    component.start();
    expect(component.minutes).toEqual(25);
    expect(component.seconds).toEqual(0);
    expect(component.started).toEqual(true);
    component.stop();
    expect(component.minutes).toEqual(25);
    expect(component.seconds).toEqual(0);
    expect(component.started).toEqual(false);
  });

  it('check if minutes and seconds are double digit', () => {
    expect(minutes.innerHTML).toEqual('25');
    expect(seconds.innerHTML).toEqual('0');
  });

});
