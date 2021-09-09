import { ListComponent } from './list.component';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';

describe('65438592', () => {
  let fixture: ComponentFixture<ListComponent>;
  let component: ListComponent;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ListComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should checkbox selection', () => {
    fixture.detectChanges();
    const { checkboxSelection } = component.columnDefs[0];
    const columnApiSpy = jasmine.createSpyObj('columnApi', [
      'getRowGroupColumns',
    ]);
    columnApiSpy.getRowGroupColumns.and.returnValue([]);
    const actual = checkboxSelection({ columnApi: columnApiSpy });
    expect(actual).toBeTruthy();
  });

  it('should handle checkbox selection', () => {
    fixture.detectChanges();
    const { headerCheckboxSelection } = component.columnDefs[0];
    const columnApiSpy = jasmine.createSpyObj('columnApi', [
      'getRowGroupColumns',
    ]);
    columnApiSpy.getRowGroupColumns.and.returnValue([]);
    const actual = headerCheckboxSelection({ columnApi: columnApiSpy });
    expect(actual).toBeTruthy();
  });

  it('should get value', () => {
    fixture.detectChanges();
    const { valueGetter } = component.columnDefs[0];
    const getIdSpy = spyOn(component, 'getId').and.returnValue(10);
    const actual = valueGetter({ node: { rowIndex: '0' } });
    expect(actual).toEqual(10);
    expect(getIdSpy).toHaveBeenCalled();
  });
});
