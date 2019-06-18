import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let ViewCellComponent = class ViewCellComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], ViewCellComponent.prototype, "cell", void 0);
ViewCellComponent = tslib_1.__decorate([
    Component({
        selector: 'table-cell-view-mode',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchCase="'date'">{{ cell.getValue()| date }}</div>
        <div *ngSwitchCase="'shortDate'">{{ cell.getValue()| date:'shortDate' }}</div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
    })
], ViewCellComponent);
export { ViewCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBZWxELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBRzdCLENBQUE7QUFEVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOytDQUFDO0FBRlQsaUJBQWlCO0lBYjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO0tBQ0osQ0FBQztHQUNXLGlCQUFpQixDQUc3QjtTQUhZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC12aWV3LW1vZGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjZWxsLmdldENvbHVtbigpLnR5cGVcIj5cbiAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiIFtpbm5lckhUTUxdPVwiY2VsbC5nZXRWYWx1ZSgpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiPnt7IGNlbGwuZ2V0VmFsdWUoKXwgZGF0ZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2hvcnREYXRlJ1wiPnt7IGNlbGwuZ2V0VmFsdWUoKXwgZGF0ZTonc2hvcnREYXRlJyB9fTwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+e3sgY2VsbC5nZXRWYWx1ZSgpIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG59XG4iXX0=