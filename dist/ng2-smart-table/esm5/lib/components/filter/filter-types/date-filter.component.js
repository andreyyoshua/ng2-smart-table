import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultFilter } from './default-filter';
var DateFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateFilterComponent, _super);
    function DateFilterComponent() {
        var _this = _super.call(this) || this;
        _this.datepickerType = 'calendar';
        _this.datepickerSelectMode = 'single';
        _this.datepickerPlaceholder = 'Pick a date';
        return _this;
    }
    DateFilterComponent.prototype.resetFilter = function () {
        this.inputModel = null;
        this.onChange();
    };
    DateFilterComponent.prototype.ngOnInit = function () {
        if (this.column.getFilterConfig().datepicker.type) {
            this.datepickerType = this.column.getFilterConfig().datepicker.type;
        }
        if (this.column.getFilterConfig().datepicker.selectMode) {
            this.datepickerSelectMode = this.column.getFilterConfig().datepicker.selectMode;
        }
        if (this.column.getFilterConfig().datepicker.placeholder) {
            this.datepickerPlaceholder = this.column.getFilterConfig().datepicker.placeholder;
        }
    };
    DateFilterComponent.filterFunction = function (value, query) {
        var input = new Date(value);
        var queryParts = query.split("~");
        var date1 = new Date(queryParts[0]);
        if (queryParts.length > 1) { // date range
            var date2 = new Date(queryParts[1]);
            return date1.getTime() <= input.getTime() && date2.getTime() >= input.getTime();
        }
        // exact date
        return date1.getTime() == input.getTime();
    };
    DateFilterComponent.prototype.dateToUTCDateString = function (date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = date.getDate().toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + '-' + month + '-' + day;
    };
    DateFilterComponent.prototype.onChange = function () {
        if (!this.inputModel) {
            this.query = '';
            this.setFilter();
            return;
        }
        var config = this.column.getFilterConfig().datepicker;
        if (config.selectMode == 'range') {
            this.query = this.dateToUTCDateString(this.inputModel[0]) + "~" + this.dateToUTCDateString(this.inputModel[1]);
        }
        else {
            this.query = this.dateToUTCDateString(this.inputModel);
        }
        this.setFilter();
    };
    DateFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'date-filter',
            template: "\n   <input [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\" [selectMode]=\"datepickerSelectMode\"\n          [(ngModel)]=\"inputModel\" [placeholder]=\"datepickerPlaceholder\" readonly />\n   <button (click)=\"resetFilter()\">x</button>\n   <owl-date-time #dt [pickerType]=\"datepickerType\" (afterPickerClosed)=\"onChange()\"></owl-date-time>\n ",
            styles: ['input { width: 80% !important; }']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DateFilterComponent);
    return DateFilterComponent;
}(DefaultFilter));
export { DateFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci10eXBlcy9kYXRlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWWpEO0lBQXlDLCtDQUFhO0lBTXBEO1FBQUEsWUFDQyxpQkFBTyxTQUNSO1FBTkQsb0JBQWMsR0FBRyxVQUFVLENBQUM7UUFDNUIsMEJBQW9CLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLDJCQUFxQixHQUFHLGFBQWEsQ0FBQzs7SUFJdEMsQ0FBQztJQUVBLHlDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVBLHNDQUFRLEdBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUN4RCxJQUFJLENBQUMs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IE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcblxuQENvbXBvbmVudCh7XG4gc2VsZWN0b3I6ICdkYXRlLWZpbHRlcicsXG4gc3R5bGVzOiBbJ2lucHV0IHsgd2lkdGg6IDgwJSAhaW1wb3J0YW50OyB9J10sXG4gdGVtcGxhdGU6IGBcbiAgIDxpbnB1dCBbb3dsRGF0ZVRpbWVUcmlnZ2VyXT1cImR0XCIgW293bERhdGVUaW1lXT1cImR0XCIgW3NlbGVjdE1vZGVdPVwiZGF0ZXBpY2tlclNlbGVjdE1vZGVcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRNb2RlbFwiIFtwbGFjZWhvbGRlcl09XCJkYXRlcGlja2VyUGxhY2Vob2xkZXJcIiByZWFkb25seSAvPlxuICAgPGJ1dHRvbiAoY2xpY2spPVwicmVzZXRGaWx0ZXIoKVwiPng8L2J1dHRvbj5cbiAgIDxvd2wtZGF0ZS10aW1lICNkdCBbcGlja2VyVHlwZV09XCJkYXRlcGlja2VyVHlwZVwiIChhZnRlclBpY2tlckNsb3NlZCk9XCJvbkNoYW5nZSgpXCI+PC9vd2wtZGF0ZS10aW1lPlxuIGAsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiBpbnB1dE1vZGVsOiBhbnk7XG4gZGF0ZXBpY2tlclR5cGUgPSAnY2FsZW5kYXInO1xuIGRhdGVwaWNrZXJTZWxlY3RNb2RlID0gJ3NpbmdsZSc7XG4gZGF0ZXBpY2tlclBsYWNlaG9sZGVyID0gJ1BpY2sgYSBkYXRlJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgIHN1cGVyKCk7XG4gfVxuXG4gIHJlc2V0RmlsdGVyKCkge1xuICAgdGhpcy5pbnB1dE1vZGVsID0gbnVsbDtcbiAgIHRoaXMub25DaGFuZ2UoKTtcbiB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICBpZiAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci50eXBlKSB7XG4gICAgIHRoaXMuZGF0ZXBpY2tlclR5cGUgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5kYXRlcGlja2VyLnR5cGU7XG4gICB9XG4gICBpZiAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci5zZWxlY3RNb2RlKSB7XG4gICAgIHRoaXMuZGF0ZXBpY2tlclNlbGVjdE1vZGUgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5kYXRlcGlja2VyLnNlbGVjdE1vZGU7XG4gICB9XG4gICBpZiAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci5wbGFjZWhvbGRlcikge1xuICAgICB0aGlzLmRhdGVwaWNrZXJQbGFjZWhvbGRlciA9IHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIucGxhY2Vob2xkZXI7XG4gICB9XG4gfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyRnVuY3Rpb24odmFsdWU6IHN0cmluZywgcXVlcnk6IHN0cmluZykge1xuICAgY29uc3QgaW5wdXQgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICBjb25zdCBxdWVyeVBhcnRzID0gcXVlcnkuc3BsaXQoXCJ+XCIpO1xuICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShxdWVyeVBhcnRzWzBdKTtcblxuICAgIGlmIChxdWVyeVBhcnRzLmxlbmd0aCA+IDEpIHsgLy8gZGF0ZSByYW5nZVxuICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKHF1ZXJ5UGFydHNbMV0pO1xuICAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIDw9IGlucHV0LmdldFRpbWUoKSAmJiBkYXRlMi5nZXRUaW1lKCkgPj0gaW5wdXQuZ2V0VGltZSgpO1xuICAgfVxuXG4gICAgLy8gZXhhY3QgZGF0ZVxuICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSA9PSBpbnB1dC5nZXRUaW1lKCk7XG4gfVxuXG4gIGRhdGVUb1VUQ0RhdGVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgbGV0IG1vbnRoOiBzdHJpbmcgPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgIGlmIChtb250aC5sZW5ndGggPT0gMSkge1xuICAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gICB9XG4gICBsZXQgZGF5OiBzdHJpbmcgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgaWYgKGRheS5sZW5ndGggPT0gMSkge1xuICAgICBkYXkgPSBcIjBcIiArIGRheTtcbiAgIH1cbiAgIHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgaWYgKCF0aGlzLmlucHV0TW9kZWwpIHtcbiAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICB0aGlzLnNldEZpbHRlcigpO1xuICAgICByZXR1cm47XG4gICB9XG4gICBjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5kYXRlcGlja2VyO1xuICAgaWYgKGNvbmZpZy5zZWxlY3RNb2RlID09ICdyYW5nZScpIHtcbiAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZGF0ZVRvVVRDRGF0ZVN0cmluZyh0aGlzLmlucHV0TW9kZWxbMF0pICsgXCJ+XCIgKyB0aGlzLmRhdGVUb1VUQ0RhdGVTdHJpbmcodGhpcy5pbnB1dE1vZGVsWzFdKTtcbiAgIH0gZWxzZSB7XG4gICAgIHRoaXMucXVlcnkgPSB0aGlzLmRhdGVUb1VUQ0RhdGVTdHJpbmcodGhpcy5pbnB1dE1vZGVsKTtcbiAgIH1cbiAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gfVxufVxuIl19