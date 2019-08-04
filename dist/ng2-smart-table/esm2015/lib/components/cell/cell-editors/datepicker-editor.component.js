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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2RhdGVwaWNrZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBWS9DLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsYUFBYTtJQUt6RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBSkEsZ0JBQVcsR0FBVyxvQkFBb0IsQ0FBQztJQUtyRCxDQUFDO0lBRUEsUUFBUTtRQUNQLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUEsUUFBUTtRQUNQLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFuQlc7SUFBUixLQUFLLEVBQUU7OzhEQUE0QztBQUYxQyx5QkFBeUI7SUFWcEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUU7Ozs7OzZGQUtpRjtpQkFDbEYsd0VBQXdFO0tBQ2xGLENBQUM7O0dBQ1cseUJBQXlCLENBcUJyQztTQXJCWSx5QkFBeUI7QUEwQnRDLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBSW5DLGdCQUFnQixDQUFDO0lBRWpCLFFBQVEsS0FBSyxDQUFDO0NBRWYsQ0FBQTtBQVBTO0lBQVIsS0FBSyxFQUFFOzt3REFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzswREFBYztBQUZYLHlCQUF5QjtJQUhwQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsOEJBQThCO0tBQ3pDLENBQUM7O0dBQ1cseUJBQXlCLENBUXBDO1NBUlcseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRFZGl0b3J9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG4gQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxzcGFuIFtvd2xEYXRlVGltZVRyaWdnZXJdPVwiZHRcIiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT48L3NwYW4+XG4gICAgPGlucHV0IFtvd2xEYXRlVGltZVRyaWdnZXJdPVwiZHRcIiBbb3dsRGF0ZVRpbWVdPVwiZHRcIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0TW9kZWxcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiByZWFkb25seSBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gIDwvZGl2PlxuICA8b3dsLWRhdGUtdGltZSAjZHQgcGlja2VyVHlwZT1cImNhbGVuZGFyXCIgKGFmdGVyUGlja2VyQ2xvc2VkKT1cIm9uQ2hhbmdlKClcIj48L293bC1kYXRlLXRpbWU+YCxcbiAgc3R5bGVzOiBbJy5mYSB7IGZvbnQtc2l6ZTogMS4ycmVtOyB9IGlucHV0IHsgcGFkZGluZzogLjM3NWVtIC43NWVtICFpbXBvcnRhbnQ7IH0nXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnQ2hvb3NlIGEgRGF0ZS9UaW1lJztcbiAgaW5wdXRNb2RlbDogRGF0ZTtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLmNlbGwubmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRNb2RlbCA9IG5ldyBEYXRlKHRoaXMuY2VsbC5uZXdWYWx1ZSk7XG4gICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSB0aGlzLmlucHV0TW9kZWwudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICAgb25DaGFuZ2UoKSB7XG4gICAgaWYodGhpcy5pbnB1dE1vZGVsKSB7XG4gICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSB0aGlzLmlucHV0TW9kZWwudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuIEBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYHt7dmFsdWUgfCBkYXRlOidzaG9ydERhdGUnfX1gLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyUmVuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgcm93RGF0YTogYW55O1xuXG4gICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBuZ09uSW5pdCgpIHsgfVxuXG4gfVxuIl19