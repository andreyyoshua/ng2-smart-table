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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvZGF0ZS1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVlqRDtJQUF5QywrQ0FBYTtJQU1wRDtRQUFBLFlBQ0MsaUJBQU8sU0FDUjtRQU5ELG9CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQzVCLDBCQUFvQixHQUFHLFFBQVEsQ0FBQztRQUNoQywyQkFBcUIsR0FBRyxhQUFhLENBQUM7O0lBSXRDLENBQUM7SUFFQSx5Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFQSxzQ0FBUSxHQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUN2RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFD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dCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnZGF0ZS1maWx0ZXInLFxuIHN0eWxlczogWydpbnB1dCB7IHdpZHRoOiA4MCUgIWltcG9ydGFudDsgfSddLFxuIHRlbXBsYXRlOiBgXG4gICA8aW5wdXQgW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFwiIFtvd2xEYXRlVGltZV09XCJkdFwiIFtzZWxlY3RNb2RlXT1cImRhdGVwaWNrZXJTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0TW9kZWxcIiBbcGxhY2Vob2xkZXJdPVwiZGF0ZXBpY2tlclBsYWNlaG9sZGVyXCIgcmVhZG9ubHkgLz5cbiAgIDxidXR0b24gKGNsaWNrKT1cInJlc2V0RmlsdGVyKClcIj54PC9idXR0b24+XG4gICA8b3dsLWRhdGUtdGltZSAjZHQgW3BpY2tlclR5cGVdPVwiZGF0ZXBpY2tlclR5cGVcIiAoYWZ0ZXJQaWNrZXJDbG9zZWQpPVwib25DaGFuZ2UoKVwiPjwvb3dsLWRhdGUtdGltZT5cbiBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gaW5wdXRNb2RlbDogYW55O1xuIGRhdGVwaWNrZXJUeXBlID0gJ2NhbGVuZGFyJztcbiBkYXRlcGlja2VyU2VsZWN0TW9kZSA9ICdzaW5nbGUnO1xuIGRhdGVwaWNrZXJQbGFjZWhvbGRlciA9ICdQaWNrIGEgZGF0ZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICBzdXBlcigpO1xuIH1cblxuICByZXNldEZpbHRlcigpIHtcbiAgIHRoaXMuaW5wdXRNb2RlbCA9IG51bGw7XG4gICB0aGlzLm9uQ2hhbmdlKCk7XG4gfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIudHlwZSkge1xuICAgICB0aGlzLmRhdGVwaWNrZXJUeXBlID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci50eXBlO1xuICAgfVxuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIuc2VsZWN0TW9kZSkge1xuICAgICB0aGlzLmRhdGVwaWNrZXJTZWxlY3RNb2RlID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlci5zZWxlY3RNb2RlO1xuICAgfVxuICAgaWYgKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmRhdGVwaWNrZXIucGxhY2Vob2xkZXIpIHtcbiAgICAgdGhpcy5kYXRlcGlja2VyUGxhY2Vob2xkZXIgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5kYXRlcGlja2VyLnBsYWNlaG9sZGVyO1xuICAgfVxuIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbHRlckZ1bmN0aW9uKHZhbHVlOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgIGNvbnN0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpO1xuICAgY29uc3QgcXVlcnlQYXJ0cyA9IHF1ZXJ5LnNwbGl0KFwiflwiKTtcbiAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUocXVlcnlQYXJ0c1swXSk7XG5cbiAgICBpZiAocXVlcnlQYXJ0cy5sZW5ndGggPiAxKSB7IC8vIGRhdGUgcmFuZ2VcbiAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShxdWVyeVBhcnRzWzFdKTtcbiAgICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSA8PSBpbnB1dC5nZXRUaW1lKCkgJiYgZGF0ZTIuZ2V0VGltZSgpID49IGlucHV0LmdldFRpbWUoKTtcbiAgIH1cblxuICAgIC8vIGV4YWN0IGRhdGVcbiAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgPT0gaW5wdXQuZ2V0VGltZSgpO1xuIH1cblxuICBkYXRlVG9VVENEYXRlU3RyaW5nKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgIGxldCBtb250aDogc3RyaW5nID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XG4gICBpZiAobW9udGgubGVuZ3RoID09IDEpIHtcbiAgICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xuICAgfVxuICAgbGV0IGRheTogc3RyaW5nID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgIGlmIChkYXkubGVuZ3RoID09IDEpIHtcbiAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICB9XG4gICByZXR1cm4geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgIGlmICghdGhpcy5pbnB1dE1vZGVsKSB7XG4gICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAgcmV0dXJuO1xuICAgfVxuICAgY29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZGF0ZXBpY2tlcjtcbiAgIGlmIChjb25maWcuc2VsZWN0TW9kZSA9PSAncmFuZ2UnKSB7XG4gICAgIHRoaXMucXVlcnkgPSB0aGlzLmRhdGVUb1VUQ0RhdGVTdHJpbmcodGhpcy5pbnB1dE1vZGVsWzBdKSArIFwiflwiICsgdGhpcy5kYXRlVG9VVENEYXRlU3RyaW5nKHRoaXMuaW5wdXRNb2RlbFsxXSk7XG4gICB9IGVsc2Uge1xuICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5kYXRlVG9VVENEYXRlU3RyaW5nKHRoaXMuaW5wdXRNb2RlbCk7XG4gICB9XG4gICB0aGlzLnNldEZpbHRlcigpO1xuIH1cbn1cbiJdfQ==