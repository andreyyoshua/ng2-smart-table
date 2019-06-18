import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DefaultEditor } from './default-editor';
let DatepickerEditorComponent = class DatepickerEditorComponent extends DefaultEditor {
    constructor() {
        super();
        this.placeholder = 'Choose a Date/Time';
    }
    ngOnInit() {
        if (this.cell.newValue) {
            this.inputModel = new Date(this.cell.newValue);
            this.cell.newValue = this.inputModel.toISOString();
        }
    }
    onChange() {
        if (this.inputModel) {
            this.cell.newValue = this.inputModel.toISOString();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DatepickerEditorComponent.prototype, "placeholder", void 0);
DatepickerEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'datepicker-editor',
        template: `<div class="input-group">
    <span [owlDateTimeTrigger]="dt" class="input-group-addon"><i class="fa fa-calendar"></i></span>
    <input [owlDateTimeTrigger]="dt" [owlDateTime]="dt"
           [(ngModel)]="inputModel" [placeholder]="placeholder" readonly class="form-control" />
  </div>
  <owl-date-time #dt pickerType="calendar" (afterPickerClosed)="onChange()"></owl-date-time>`,
        styles: ['.fa { font-size: 1.2rem; } input { padding: .375em .75em !important; }']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DatepickerEditorComponent);
export { DatepickerEditorComponent };
let DatepickerRenderComponent = class DatepickerRenderComponent {
    constructor() { }
    ngOnInit() { }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DatepickerRenderComponent.prototype, "value", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], DatepickerRenderComponent.prototype, "rowData", void 0);
DatepickerRenderComponent = tslib_1.__decorate([
    Component({
        template: `{{value | date:'shortDate'}}`
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DatepickerRenderComponent);
export { DatepickerRenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFZL0MsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxhQUFhO0lBS3pEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFKQSxnQkFBVyxHQUFXLG9CQUFvQixDQUFDO0lBS3JELENBQUM7SUFFQSxRQUFRO1FBQ1AsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFQSxRQUFRO1FBQ1AsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5CVztJQUFSLEtBQUssRUFBRTs7OERBQTRDO0FBRjFDLHlCQUF5QjtJQVZwQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRTs7Ozs7NkZBS2lGO2lCQUNsRix3RUFBd0U7S0FDbEYsQ0FBQzs7R0FDVyx5QkFBeUIsQ0FxQnJDO1NBckJZLHlCQUF5QjtBQTBCdEMsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFJbkMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7Q0FFZixDQUFBO0FBUFM7SUFBUixLQUFLLEVBQUU7O3dEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OzBEQUFjO0FBRlgseUJBQXlCO0lBSHBDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw4QkFBOEI7S0FDekMsQ0FBQzs7R0FDVyx5QkFBeUIsQ0FRcEM7U0FSVyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEVkaXRvcn0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbiBAQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPHNwYW4gW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPjwvc3Bhbj5cbiAgICA8aW5wdXQgW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIFtvd2xEYXRlVGltZV09XCJkdFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRNb2RlbFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIHJlYWRvbmx5IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgPC9kaXY+XG4gIDxvd2wtZGF0ZS10aW1lICNkdCBwaWNrZXJUeXBlPVwiY2FsZW5kYXJcIiAoYWZ0ZXJQaWNrZXJDbG9zZWQpPVwib25DaGFuZ2UoKVwiPjwvb3dsLWRhdGUtdGltZT5gLFxuICBzdHlsZXM6IFsnLmZhIHsgZm9udC1zaXplOiAxLjJyZW07IH0gaW5wdXQgeyBwYWRkaW5nOiAuMzc1ZW0gLjc1ZW0gIWltcG9ydGFudDsgfSddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdDaG9vc2UgYSBEYXRlL1RpbWUnO1xuICBpbnB1dE1vZGVsOiBEYXRlO1xuXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgIGlmKHRoaXMuY2VsbC5uZXdWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dE1vZGVsID0gbmV3IERhdGUodGhpcy5jZWxsLm5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IHRoaXMuaW5wdXRNb2RlbC50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gICBvbkNoYW5nZSgpIHtcbiAgICBpZih0aGlzLmlucHV0TW9kZWwpIHtcbiAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IHRoaXMuaW5wdXRNb2RlbC50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG4gQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBge3t2YWx1ZSB8IGRhdGU6J3Nob3J0RGF0ZSd9fWAsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJSZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XG5cbiAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgIG5nT25Jbml0KCkgeyB9XG5cbiB9XG4iXX0=