import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let SelectEditorComponent = class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
SelectEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'select-editor',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SelectEditorComponent);
export { SelectEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvc2VsZWN0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0JqRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGFBQWE7SUFFdEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBTFkscUJBQXFCO0lBbEJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7S0FDSixDQUFDOztHQUNXLHFCQUFxQixDQUtqQztTQUxZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIj5cblxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKT8ubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24udmFsdWUgPT09IGNlbGwuZ2V0VmFsdWUoKVwiPnt7IG9wdGlvbi50aXRsZSB9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=