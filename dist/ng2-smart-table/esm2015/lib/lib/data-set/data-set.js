import { Row } from './row';
import { Column } from './column';
export class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
    }
    selectRow(row) {
        const previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    selectPreviousRow() {
        if (this.rows.length > 0) {
            let index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    }
    selectFirstRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    }
    selectLastRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    }
    willSelectFirstRow() {
        this.willSelect = 'first';
    }
    willSelectLastRow() {
        this.willSelect = 'last';
    }
    select() {
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
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        for (const id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            this.rows.push(new Row(index, el, this));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9kYXRhLXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzVCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsTUFBTSxPQUFPLE9BQU87SUFVbEIsWUFBWSxPQUFtQixFQUFFLEVBQVksY0FBc0I7UUFBdEIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFOekQsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBRXRCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFHckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVE7UUFDeEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsUUFBYTtRQUN6QixLQUFLLE1BQU0sRUFBRSxJQUFJLFFBQVEsRUFBRTtZQUN6QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcblxuZXhwb3J0IGNsYXNzIERhdGFTZXQge1xuXG4gIG5ld1JvdzogUm93O1xuXG4gIHByb3RlY3RlZCBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHByb3RlY3RlZCBjb2x1bW5zOiBBcnJheTxDb2x1bW4+ID0gW107XG4gIHByb3RlY3RlZCByb3dzOiBBcnJheTxSb3c+ID0gW107XG4gIHByb3RlY3RlZCBzZWxlY3RlZFJvdzogUm93O1xuICBwcm90ZWN0ZWQgd2lsbFNlbGVjdDogc3RyaW5nID0gJ2ZpcnN0JztcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBBcnJheTxhbnk+ID0gW10sIHByb3RlY3RlZCBjb2x1bW5TZXR0aW5nczogT2JqZWN0KSB7XG4gICAgdGhpcy5jcmVhdGVDb2x1bW5zKGNvbHVtblNldHRpbmdzKTtcbiAgICB0aGlzLnNldERhdGEoZGF0YSk7XG5cbiAgICB0aGlzLmNyZWF0ZU5ld1JvdygpO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcbiAgfVxuXG4gIGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldFJvd3MoKTogQXJyYXk8Um93PiB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldEZpcnN0Um93KCk6IFJvdyB7XG4gICAgcmV0dXJuIHRoaXMucm93c1swXTtcbiAgfVxuXG4gIGdldExhc3RSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGZpbmRSb3dCeURhdGEoZGF0YTogYW55KTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzLmZpbmQoKHJvdzogUm93KSA9PiByb3cuZ2V0RGF0YSgpID09PSBkYXRhKTtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsKCkge1xuICAgIHRoaXMucm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3cpOiBSb3cge1xuICAgIGNvbnN0IHByZXZpb3VzSXNTZWxlY3RlZCA9IHJvdy5pc1NlbGVjdGVkO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcblxuICAgIHJvdy5pc1NlbGVjdGVkID0gIXByZXZpb3VzSXNTZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcm93LmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICB9XG5cbiAgc2VsZWN0UHJldmlvdXNSb3coKTogUm93IHtcbiAgICBpZiAodGhpcy5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3cgPyB0aGlzLnNlbGVjdGVkUm93LmluZGV4IDogMDtcbiAgICAgIGlmIChpbmRleCA+IHRoaXMucm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5yb3dzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbaW5kZXhdKTtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEZpcnN0Um93KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbMF0pO1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TGFzdFJvdygpOiBSb3cge1xuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWxlY3RSb3codGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgICB9XG4gIH1cblxuICB3aWxsU2VsZWN0Rmlyc3RSb3coKSB7XG4gICAgdGhpcy53aWxsU2VsZWN0ID0gJ2ZpcnN0JztcbiAgfVxuXG4gIHdpbGxTZWxlY3RMYXN0Um93KCkge1xuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdsYXN0JztcbiAgfVxuXG4gIHNlbGVjdCgpOiBSb3cge1xuICAgIGlmICh0aGlzLmdldFJvd3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lsbFNlbGVjdCkge1xuICAgICAgaWYgKHRoaXMud2lsbFNlbGVjdCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy53aWxsU2VsZWN0ID09PSAnbGFzdCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMYXN0Um93KCk7XG4gICAgICB9XG4gICAgICB0aGlzLndpbGxTZWxlY3QgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RGaXJzdFJvdygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICB9XG5cbiAgY3JlYXRlTmV3Um93KCkge1xuICAgIHRoaXMubmV3Um93ID0gbmV3IFJvdygtMSwge30sIHRoaXMpO1xuICAgIHRoaXMubmV3Um93LmlzSW5FZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY29sdW1ucyBieSBtYXBwaW5nIGZyb20gdGhlIHNldHRpbmdzXG4gICAqIEBwYXJhbSBzZXR0aW5nc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlQ29sdW1ucyhzZXR0aW5nczogYW55KSB7XG4gICAgZm9yIChjb25zdCBpZCBpbiBzZXR0aW5ncykge1xuICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXcgQ29sdW1uKGlkLCBzZXR0aW5nc1tpZF0sIHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHJvd3MgYmFzZWQgb24gY3VycmVudCBkYXRhIHByZXBhcmVkIGluIGRhdGEgc291cmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVSb3dzKCkge1xuICAgIHRoaXMucm93cyA9IFtdO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucm93cy5wdXNoKG5ldyBSb3coaW5kZXgsIGVsLCB0aGlzKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==