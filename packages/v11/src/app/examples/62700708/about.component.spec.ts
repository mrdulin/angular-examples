import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';

describe('62700708', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let aboutServiceSpy: jasmine.SpyObj<AboutService>;
  const data = '20/04/2019';

  beforeEach(() => {
    aboutServiceSpy = jasmine.createSpyObj('AboutService', ['getAboutInfo']);
    aboutServiceSpy.getAboutInfo.and.returnValue(of(data));

    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: AboutService, useValue: aboutServiceSpy }],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when OnInit invoked through service data will return to infoList ', () => {
    expect(aboutServiceSpy.getAboutInfo).toHaveBeenCalledTimes(1);
    expect(component.dataList).toEqual(['20', '04', '2019']);
  });
});
