import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultFilter } from './default-filter';
let DateFilterComponent = class DateFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.datepickerType = 'calendar';
        this.datepickerSelectMode = 'single';
        this.datepickerPlaceholder = 'Pick a date';
    }
    resetFilter() {
        this.inputModel = null;
        this.onChange();
    }
    ngOnInit() {
        if (this.column.getFilterConfig().datepicker.type) {
            this.datepickerType = this.column.getFilterConfig().datepicker.type;
        }
        if (this.column.getFilterConfig().datepicker.selectMode) {
            this.datepickerSelectMode = this.column.getFilterConfig().datepicker.selectMode;
        }
        if (this.column.getFilterConfig().datepicker.placeholder) {
            this.datepickerPlaceholder = this.column.getFilterConfig().datepicker.placeholder;
        }
    }
    static filterFunction(value, query) {
        const input = new Date(value);
        const queryParts = query.split("~");
        const date1 = new Date(queryParts[0]);
        if (queryParts.length > 1) { // date range
            const date2 = new Date(queryParts[1]);
            return date1.getTime() <= input.getTime() && date2.getTime() >= input.getTime();
        }
        // exact date
        return date1.getTime() == input.getTime();
    }
    dateToUTCDateString(date) {
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        let day = date.getDate().toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + '-' + month + '-' + day;
    }
    onChange() {
        if (!this.inputModel) {
            this.query = '';
            this.setFilter();
            return;
        }
        const config = this.column.getFilterConfig().datepicker;
        if (config.selectMode == 'range') {
            this.query = this.dateToUTCDateString(this.inputModel[0]) + "~" + this.dateToUTCDateString(this.inputModel[1]);
        }
        else {
            this.query = this.dateToUTCDateString(this.inputModel);
        }
        this.setFilter();
    }
};
DateFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'date-filter',
        template: `
   <input [owlDateTimeTrigger]="dt" [owlDateTime]="dt" [selectMode]="datepickerSelectMode"
          [(ngModel)]="inputModel" [placeholder]="datepickerPlaceholder" readonly />
   <button (click)="resetFilter()">x</button>
   <owl-date-time #dt [pickerType]="datepickerType" (afterPickerClosed)="onChange()"></owl-date-time>
 `,
        styles: ['input { width: 80% !important; }']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DateFilterComponent);
export { DateFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvZGF0ZS1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVlqRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGFBQWE7SUFNcEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUxWLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQzVCLHlCQUFvQixHQUFHLFFBQVEsQ0FBQztRQUNoQywwQkFBcUIsR0FBRyxhQUFhLENBQUM7SUFJdEMsQ0FBQztJQUVBLFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVBLFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFD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b20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnZGF0ZS1maWx0ZXInLFxuIHN0eWxlczogWydpbnB1dCB7IHdpZHRoOiA4MCUgIWltcG9ydGFudDsgfSddLFxuIHRlbXBsYXRlOiBgXG4gICA8aW5wdXQgW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIFtvd2xEYXRlVGltZV09XCJkdFwiIFtzZWxlY3RNb2RlXT1cImRhdGVwaWNrZXJTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0TW9kZWxcIiBbcGxhY2Vob2xkZXJdPVwiZGF0ZXBpY2tlclBsYWNlaG9sZGVyXCIgcmVhZG9ubHkgLz5cbiAgIDxidXR0b24gKGNsaWNrKT1cInJlc2V0RmlsdGVyKClcIj54PC9idXR0b24+XG4gICA8b3dsLWRhdGUtdGltZSAjZHQgW3BpY2tlclR5cGVdPVwiZGF0ZXBpY2tlclR5cGVcIiAoYWZ0ZXJQaWNrZXJDbG9zZWQpPVwib25DaGFuZ2UoKVwiPjwvb3dsLWRhdGUtdGltZT5cbiBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gaW5wdXRNb2RlbDogYW55O1xuIGRhdGVwaWNrZXJUeXBlID0gJ2NhbGVuZGFyJztcbiBkYXRlcGlja2VyU2VsZWN0TW9kZSA9ICdzaW5nbGUnO1xuIGRhdGVwaWNrZXJQbGFjZWhvbGRlciA9ICdQaWNrIGEgZGF0ZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICBzdXBlcigpO1xuIH1cblxuICByZXNldEZpbHRlcigpIHtcbiAgIHRoaXMuaW5wdXRNb2RlbCA9IG51bGw7XG4gICB0aGlzLm9uQ2hhbmdlKCk7XG4gfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIudHlwZSkge1xuICAgICB0aGlzLmRhdGVwaWNrZXJUeXBlID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci50eXBlO1xuICAgfVxuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIuc2VsZWN0TW9kZSkge1xuICAgICB0aGlzLmRhdGVwaWNrZXJTZWxlY3RNb2RlID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci5zZWxlY3RNb2RlO1xuICAgfVxuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIucGxhY2Vob2xkZXIpIHtcbiAgICAgdGhpcy5kYXRlcGlja2VyUGxhY2Vob2xkZXIgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5kYXRlcGlja2VyLnBsYWNlaG9sZGVyO1xuICAgfVxuIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbHRlckZ1bmN0aW9uKHZhbHVlOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgIGNvbnN0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpO1xuICAgY29uc3QgcXVlcnlQYXJ0cyA9IHF1ZXJ5LnNwbGl0KFwiflwiKTtcbiAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUocXVlcnlQYXJ0c1swXSk7XG5cbiAgICBpZiAocXVlcnlQYXJ0cy5sZW5ndGggPiAxKSB7IC8vIGRhdGUgcmFuZ2VcbiAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShxdWVyeVBhcnRzWzFdKTtcbiAgICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSA8PSBpbnB1dC5nZXRUaW1lKCkgJiYgZGF0ZTIuZ2V0VGltZSgpID49IGlucHV0LmdldFRpbWUoKTtcbiAgIH1cblxuICAgIC8vIGV4YWN0IGRhdGVcbiAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgPT0gaW5wdXQuZ2V0VGltZSgpO1xuIH1cblxuICBkYXRlVG9VVENEYXRlU3RyaW5nKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgIGxldCBtb250aDogc3RyaW5nID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XG4gICBpZiAobW9udGgubGVuZ3RoID09IDEpIHtcbiAgICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xuICAgfVxuICAgbGV0IGRheTogc3RyaW5nID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgIGlmIChkYXkubGVuZ3RoID09IDEpIHtcbiAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICB9XG4gICByZXR1cm4geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgIGlmICghdGhpcy5pbnB1dE1vZGVsKSB7XG4gICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAgcmV0dXJuO1xuICAgfVxuICAgY29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlcjtcbiAgIGlmIChjb25maWcuc2VsZWN0TW9kZSA9PSAncmFuZ2UnKSB7XG4gICAgIHRoaXMucXVlcnkgPSB0aGlzLmRhdGVUb1VUQ0RhdGVTdHJpbmcodGhpcy5pbnB1dE1vZGVsWzBdKSArIFwiflwiICsgdGhpcy5kYXRlVG9VVENEYXRlU3RyaW5nKHRoaXMuaW5wdXRNb2RlbFsxXSk7XG4gICB9IGVsc2Uge1xuICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5kYXRlVG9VVENEYXRlU3RyaW5nKHRoaXMuaW5wdXRNb2RlbCk7XG4gICB9XG4gICB0aGlzLnNldEZpbHRlcigpO1xuIH1cbn1cbiJdfQ==