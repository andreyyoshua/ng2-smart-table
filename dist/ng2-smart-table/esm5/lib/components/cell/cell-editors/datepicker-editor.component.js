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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFZL0M7SUFBK0MscURBQWE7SUFLekQ7UUFBQSxZQUNDLGlCQUFPLFNBQ1I7UUFMUyxpQkFBVyxHQUFXLG9CQUFvQixDQUFDOztJQUtyRCxDQUFDO0lBRUEsNENBQVEsR0FBUjtRQUNDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUEsNENBQVEsR0FBUjtRQUNDLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQWxCUztRQUFSLEtBQUssRUFBRTs7a0VBQTRDO0lBRjFDLHlCQUF5QjtRQVZwQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSx5WkFLaUY7cUJBQ2xGLHdFQUF3RTtTQUNsRixDQUFDOztPQUNXLHlCQUF5QixDQXFCckM7SUFBRCxnQ0FBQztDQUFBLEFBckJELENBQStDLGFBQWEsR0FxQjNEO1NBckJZLHlCQUF5QjtBQTBCdEM7SUFJRztJQUFnQixDQUFDO0lBRWpCLDRDQUFRLEdBQVIsY0FBYSxDQUFDO0lBTE47UUFBUixLQUFLLEVBQUU7OzREQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7OzhEQUFjO0lBRlgseUJBQXlCO1FBSHBDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSw4QkFBOEI7U0FDekMsQ0FBQzs7T0FDVyx5QkFBeUIsQ0FRcEM7SUFBRCxnQ0FBQztDQUFBLEFBUkYsSUFRRTtTQVJXLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0RWRpdG9yfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuIEBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICA8c3BhbiBbb3dsRGF0ZVRpbWVUcmlnZ2VyXT1cImR0XCIgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+PC9zcGFuPlxuICAgIDxpbnB1dCBbb3dsRGF0ZVRpbWVUcmlnZ2VyXT1cImR0XCIgW293bERhdGVUaW1lXT1cImR0XCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dE1vZGVsXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgcmVhZG9ubHkgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICA8L2Rpdj5cbiAgPG93bC1kYXRlLXRpbWUgI2R0IHBpY2tlclR5cGU9XCJjYWxlbmRhclwiIChhZnRlclBpY2tlckNsb3NlZCk9XCJvbkNoYW5nZSgpXCI+PC9vd2wtZGF0ZS10aW1lPmAsXG4gIHN0eWxlczogWycuZmEgeyBmb250LXNpemU6IDEuMnJlbTsgfSBpbnB1dCB7IHBhZGRpbmc6IC4zNzVlbSAuNzVlbSAhaW1wb3J0YW50OyB9J11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3IgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ0Nob29zZSBhIERhdGUvVGltZSc7XG4gIGlucHV0TW9kZWw6IERhdGU7XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy5jZWxsLm5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0TW9kZWwgPSBuZXcgRGF0ZSh0aGlzLmNlbGwubmV3VmFsdWUpO1xuICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gdGhpcy5pbnB1dE1vZGVsLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgIG9uQ2hhbmdlKCkge1xuICAgIGlmKHRoaXMuaW5wdXRNb2RlbCkge1xuICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gdGhpcy5pbnB1dE1vZGVsLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICB9XG59XG5cbiBAQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGB7e3ZhbHVlIHwgZGF0ZTonc2hvcnREYXRlJ319YCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclJlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcblxuICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgbmdPbkluaXQoKSB7IH1cblxuIH1cbiJdfQ==