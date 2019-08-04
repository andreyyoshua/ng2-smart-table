import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DefaultEditor } from './default-editor';
var DatepickerEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatepickerEditorComponent, _super);
    function DatepickerEditorComponent() {
        var _this = _super.call(this) || this;
        _this.placeholder = 'Choose a Date/Time';
        return _this;
    }
    DatepickerEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.newValue) {
            this.inputModel = new Date(this.cell.newValue);
            this.cell.newValue = this.inputModel.toISOString();
        }
    };
    DatepickerEditorComponent.prototype.onChange = function () {
        if (this.inputModel) {
            this.cell.newValue = this.inputModel.toISOString();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], DatepickerEditorComponent.prototype, "placeholder", void 0);
    DatepickerEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'datepicker-editor',
            template: "<div class=\"input-group\">\n    <span [owlDateTimeTrigger]=\"dt\" class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n    <input [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\"\n           [(ngModel)]=\"inputModel\" [placeholder]=\"placeholder\" readonly class=\"form-control\" />\n  </div>\n  <owl-date-time #dt pickerType=\"calendar\" (afterPickerClosed)=\"onChange()\"></owl-date-time>",
            styles: ['.fa { font-size: 1.2rem; } input { padding: .375em .75em !important; }']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DatepickerEditorComponent);
    return DatepickerEditorComponent;
}(DefaultEditor));
export { DatepickerEditorComponent };
var DatepickerRenderComponent = /** @class */ (function () {
    function DatepickerRenderComponent() {
    }
    DatepickerRenderComponent.prototype.ngOnInit = function () { };
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
            template: "{{value | date:'shortDate'}}"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DatepickerRenderComponent);
    return DatepickerRenderComponent;
}());
export { DatepickerRenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2RhdGVwaWNrZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBWS9DO0lBQStDLHFEQUFhO0lBS3pEO1FBQUEsWUFDQyxpQkFBTyxTQUNSO1FBTFMsaUJBQVcsR0FBVyxvQkFBb0IsQ0FBQzs7SUFLckQsQ0FBQztJQUVBLDRDQUFRLEdBQVI7UUFDQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVBLDRDQUFRLEdBQVI7UUFDQyxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFsQlM7UUFBUixLQUFLLEVBQUU7O2tFQUE0QztJQUYxQyx5QkFBeUI7UUFWcEMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUseVpBS2lGO3FCQUNsRix3RUFBd0U7U0FDbEYsQ0FBQzs7T0FDVyx5QkFBeUIsQ0FxQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXJCRCxDQUErQyxhQUFhLEdBcUIzRDtTQXJCWSx5QkFBeUI7QUEwQnRDO0lBSUc7SUFBZ0IsQ0FBQztJQUVqQiw0Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUxOO1FBQVIsS0FBSyxFQUFFOzs0REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzs4REFBYztJQUZYLHlCQUF5QjtRQUhwQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsOEJBQThCO1NBQ3pDLENBQUM7O09BQ1cseUJBQXlCLENBUXBDO0lBQUQsZ0NBQUM7Q0FBQSxBQVJGLElBUUU7U0FSVyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEVkaXRvcn0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbiBAQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPHNwYW4gW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPjwvc3Bhbj5cbiAgICA8aW5wdXQgW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIFtvd2xEYXRlVGltZV09XCJkdFwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRNb2RlbFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIHJlYWRvbmx5IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgPC9kaXY+XG4gIDxvd2wtZGF0ZS10aW1lICNkdCBwaWNrZXJUeXBlPVwiY2FsZW5kYXJcIiAoYWZ0ZXJQaWNrZXJDbG9zZWQpPVwib25DaGFuZ2UoKVwiPjwvb3dsLWRhdGUtdGltZT5gLFxuICBzdHlsZXM6IFsnLmZhIHsgZm9udC1zaXplOiAxLjJyZW07IH0gaW5wdXQgeyBwYWRkaW5nOiAuMzc1ZW0gLjc1ZW0gIWltcG9ydGFudDsgfSddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdDaG9vc2UgYSBEYXRlL1RpbWUnO1xuICBpbnB1dE1vZGVsOiBEYXRlO1xuXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgIGlmKHRoaXMuY2VsbC5uZXdWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dE1vZGVsID0gbmV3IERhdGUodGhpcy5jZWxsLm5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IHRoaXMuaW5wdXRNb2RlbC50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gICBvbkNoYW5nZSgpIHtcbiAgICBpZih0aGlzLmlucHV0TW9kZWwpIHtcbiAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IHRoaXMuaW5wdXRNb2RlbC50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG4gQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBge3t2YWx1ZSB8IGRhdGU6J3Nob3J0RGF0ZSd9fWAsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJSZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XG5cbiAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgIG5nT25Jbml0KCkgeyB9XG5cbiB9XG4iXX0=