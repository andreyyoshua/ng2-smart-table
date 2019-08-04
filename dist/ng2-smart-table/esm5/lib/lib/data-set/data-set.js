import { Row } from './row';
import { Column } from './column';
var DataSet = /** @class */ (function () {
    function DataSet(data, columnSettings) {
        if (data === void 0) { data = []; }
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    DataSet.prototype.setData = function (data) {
        this.data = data;
        this.createRows();
    };
    DataSet.prototype.getColumns = function () {
        return this.columns;
    };
    DataSet.prototype.getRows = function () {
        return this.rows;
    };
    DataSet.prototype.getFirstRow = function () {
        return this.rows[0];
    };
    DataSet.prototype.getLastRow = function () {
        return this.rows[this.rows.length - 1];
    };
    DataSet.prototype.findRowByData = function (data) {
        return this.rows.find(function (row) { return row.getData() === data; });
    };
    DataSet.prototype.deselectAll = function () {
        this.rows.forEach(function (row) {
            row.isSelected = false;
        });
    };
    DataSet.prototype.selectRow = function (row) {
        var previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.multipleSelectRow = function (row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.selectPreviousRow = function () {
        if (this.rows.length > 0) {
            var index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectFirstRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectLastRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.willSelectFirstRow = function () {
        this.willSelect = 'first';
    };
    DataSet.prototype.willSelectLastRow = function () {
        this.willSelect = 'last';
    };
    DataSet.prototype.select = function () {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    };
    DataSet.prototype.createNewRow = function () {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    };
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    DataSet.prototype.createColumns = function (settings) {
        for (var id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    };
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    DataSet.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        this.data.forEach(function (el, index) {
            _this.rows.push(new Row(index, el, _this));
        });
    };
    return DataSet;
}());
export { DataSet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9kYXRhLXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzVCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEM7SUFVRSxpQkFBWSxJQUFxQixFQUFZLGNBQXNCO1FBQXZELHFCQUFBLEVBQUEsU0FBcUI7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQU56RCxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFFdEIsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUdyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5QkFBTyxHQUFQLFVBQVEsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcblxuZXhwb3J0IGNsYXNzIERhdGFTZXQge1xuXG4gIG5ld1JvdzogUm93O1xuXG4gIHByb3RlY3RlZCBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHByb3RlY3RlZCBjb2x1bW5zOiBBcnJheTxDb2x1bW4+ID0gW107XG4gIHByb3RlY3RlZCByb3dzOiBBcnJheTxSb3c+ID0gW107XG4gIHByb3RlY3RlZCBzZWxlY3RlZFJvdzogUm93O1xuICBwcm90ZWN0ZWQgd2lsbFNlbGVjdDogc3RyaW5nID0gJ2ZpcnN0JztcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBBcnJheTxhbnk+ID0gW10sIHByb3RlY3RlZCBjb2x1bW5TZXR0aW5nczogT2JqZWN0KSB7XG4gICAgdGhpcy5jcmVhdGVDb2x1bW5zKGNvbHVtblNldHRpbmdzKTtcbiAgICB0aGlzLnNldERhdGEoZGF0YSk7XG5cbiAgICB0aGlzLmNyZWF0ZU5ld1JvdygpO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcbiAgfVxuXG4gIGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldFJvd3MoKTogQXJyYXk8Um93PiB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldEZpcnN0Um93KCk6IFJvdyB7XG4gICAgcmV0dXJuIHRoaXMucm93c1swXTtcbiAgfVxuXG4gIGdldExhc3RSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGZpbmRSb3dCeURhdGEoZGF0YTogYW55KTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzLmZpbmQoKHJvdzogUm93KSA9PiByb3cuZ2V0RGF0YSgpID09PSBkYXRhKTtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMucm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3cpOiBSb3cge1xuICAgIGNvbnN0IHByZXZpb3VzSXNTZWxlY3RlZCA9IHJvdy5pc1NlbGVjdGVkO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcblxuICAgIHJvdy5pc1NlbGVjdGVkID0gIXByZXZpb3VzSXNTZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcm93LmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICB9XG5cbiAgc2VsZWN0UHJldmlvdXNSb3coKTogUm93IHtcbiAgICBpZiAodGhpcy5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3cgPyB0aGlzLnNlbGVjdGVkUm93LmluZGV4IDogMDtcbiAgICAgIGlmIChpbmRleCA+IHRoaXMucm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5yb3dzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbaW5kZXhdKTtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEZpcnN0Um93KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbMF0pO1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TGFzdFJvdygpOiBSb3cge1xuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWxlY3RSb3codGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgICB9XG4gIH1cblxuICB3aWxsU2VsZWN0Rmlyc3RSb3coKSB7XG4gICAgdGhpcy53aWxsU2VsZWN0ID0gJ2ZpcnN0JztcbiAgfVxuXG4gIHdpbGxTZWxlY3RMYXN0Um93KCkge1xuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdsYXN0JztcbiAgfVxuXG4gIHNlbGVjdCgpOiBSb3cge1xuICAgIGlmICh0aGlzLmdldFJvd3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lsbFNlbGVjdCkge1xuICAgICAgaWYgKHRoaXMud2lsbFNlbGVjdCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy53aWxsU2VsZWN0ID09PSAnbGFzdCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMYXN0Um93KCk7XG4gICAgICB9XG4gICAgICB0aGlzLndpbGxTZWxlY3QgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RGaXJzdFJvdygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICB9XG5cbiAgY3JlYXRlTmV3Um93KCkge1xuICAgIHRoaXMubmV3Um93ID0gbmV3IFJvdygtMSwge30sIHRoaXMpO1xuICAgIHRoaXMubmV3Um93LmlzSW5FZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY29sdW1ucyBieSBtYXBwaW5nIGZyb20gdGhlIHNldHRpbmdzXG4gICAqIEBwYXJhbSBzZXR0aW5nc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlQ29sdW1ucyhzZXR0aW5nczogYW55KSB7XG4gICAgZm9yIChjb25zdCBpZCBpbiBzZXR0aW5ncykge1xuICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXcgQ29sdW1uKGlkLCBzZXR0aW5nc1tpZF0sIHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHJvd3MgYmFzZWQgb24gY3VycmVudCBkYXRhIHByZXBhcmVkIGluIGRhdGEgc291cmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVSb3dzKCkge1xuICAgIHRoaXMucm93cyA9IFtdO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucm93cy5wdXNoKG5ldyBSb3coaW5kZXgsIGVsLCB0aGlzKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==