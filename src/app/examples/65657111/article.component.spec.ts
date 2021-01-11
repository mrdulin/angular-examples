import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArticlesComponent } from './article.component';
import { ArticleService } from './article.service';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ArticlesComponent],
        providers: [ArticleService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    let stub_getAllArticles = spyOn(component, 'getAllArticles').and.stub();
    component.ngOnInit();
    expect(component.filteredArticles).toEqual([]);
    expect(stub_getAllArticles).toHaveBeenCalledTimes(1);
  });
});
