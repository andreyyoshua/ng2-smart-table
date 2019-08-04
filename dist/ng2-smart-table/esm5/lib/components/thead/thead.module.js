import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
var THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                FilterModule,
                CellModule,
            ],
            declarations: tslib_1.__spread(THEAD_COMPONENTS),
            exports: tslib_1.__spread(THEAD_COMPONENTS),
        })
    ], THeadModule);
    return THeadModule;
}());
export { THeadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTVFLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsMkJBQTJCO0NBQzVCLENBQUM7QUFnQkY7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWR2QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osVUFBVTthQUNYO1lBQ0QsWUFBWSxtQkFDUCxnQkFBZ0IsQ0FDcEI7WUFDRCxPQUFPLG1CQUNGLGdCQUFnQixDQUNwQjtTQUNGLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIubW9kdWxlJztcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90aGVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FkZC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5UaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY29sdW1uLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGb3JtUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZvcm0tcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC10aXRsZXMtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IFRIRUFEX0NPTVBPTkVOVFMgPSBbXG4gIEFjdGlvbnNDb21wb25lbnQsXG4gIEFjdGlvbnNUaXRsZUNvbXBvbmVudCxcbiAgQWRkQnV0dG9uQ29tcG9uZW50LFxuICBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCxcbiAgQ29sdW1uVGl0bGVDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxuICBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQsXG4gIFRoZWFkRm9ybVJvd0NvbXBvbmVudCxcbiAgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIENlbGxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUSGVhZE1vZHVsZSB7IH1cbiJdfQ==