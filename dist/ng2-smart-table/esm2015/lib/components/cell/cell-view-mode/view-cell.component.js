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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS1hbmRyZXl5b3NodWEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtdmlldy1tb2RlL3ZpZXctY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWVsRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUc3QixDQUFBO0FBRFU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTsrQ0FBQztBQUZULGlCQUFpQjtJQWI3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7S0FRUDtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0FHN0I7U0FIWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtdmlldy1tb2RlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiY2VsbC5nZXRDb2x1bW4oKS50eXBlXCI+XG4gICAgICAgIDxjdXN0b20tdmlldy1jb21wb25lbnQgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCIgW2NlbGxdPVwiY2VsbFwiPjwvY3VzdG9tLXZpZXctY29tcG9uZW50PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInaHRtbCdcIiBbaW5uZXJIVE1MXT1cImNlbGwuZ2V0VmFsdWUoKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj57eyBjZWxsLmdldFZhbHVlKCl8IGRhdGUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3Nob3J0RGF0ZSdcIj57eyBjZWxsLmdldFZhbHVlKCl8IGRhdGU6J3Nob3J0RGF0ZScgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0Pnt7IGNlbGwuZ2V0VmFsdWUoKSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDZWxsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xufVxuIl19