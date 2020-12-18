import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BComponent } from './b.component';

describe('65088777', () => {
  let fixture: ComponentFixture<BComponent>;
  let component: BComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
  });

  it('should destroy component with super', () => {
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.isDownloaded).toBeUndefined();
  });
});
