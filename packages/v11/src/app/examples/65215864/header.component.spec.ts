import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('clicking the toggle button invoke our click handler', () => {
    const clickSpy = spyOn(component, 'hamburgerClicked');
    const toggleButton = fixture.debugElement.query(By.css('#sidebarToggle'));
    toggleButton.triggerEventHandler('click', toggleButton);
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('clicking the toggle button invoke our click handler', () => {
    const clickSpy = spyOn(component, 'hamburgerClicked');
    const toggleButton = fixture.nativeElement.querySelector('#sidebarToggle');
    toggleButton.click();
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
