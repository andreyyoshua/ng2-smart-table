export function prepareValue(value) { return value; }
export class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS1hbmRyZXl5b3NodWEvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc2V0L2NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxVQUFVLFlBQVksQ0FBRSxLQUFVLElBQUksT0FBTyxLQUFLLENBQUEsQ0FBQyxDQUFDO0FBRTFELE1BQU0sT0FBTyxJQUFJO0lBS2YsWUFBc0IsS0FBVSxFQUFZLEdBQVEsRUFBWSxNQUFXLEVBQVksT0FBZ0I7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUFZLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQVksWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUh2RyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBSWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLFFBQVEsQ0FBQztRQUN4RSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ25DO2FBQ0k7WUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDcEM7SUFDSCxDQUFDOztBQXZDZ0IsWUFBTyxHQUFHLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYWx1ZSAodmFsdWU6IGFueSkgeyByZXR1cm4gdmFsdWUgfVxuXG5leHBvcnQgY2xhc3MgQ2VsbCB7XG5cbiAgbmV3VmFsdWU6IGFueSA9ICcnO1xuICBwcm90ZWN0ZWQgc3RhdGljIFBSRVBBUkUgPSBwcmVwYXJlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHZhbHVlOiBhbnksIHByb3RlY3RlZCByb3c6IFJvdywgcHJvdGVjdGVkIGNvbHVtbjogYW55LCBwcm90ZWN0ZWQgZGF0YVNldDogRGF0YVNldCkge1xuICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENvbHVtbigpOiBDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbjtcbiAgfVxuXG4gIGdldFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvdztcbiAgfVxuXG4gIGdldFZhbHVlKCk6IGFueSB7XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmNvbHVtbi5nZXRWYWx1ZVByZXBhcmVGdW5jdGlvbigpIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgY29uc3QgcHJlcGFyZSA9IHZhbGlkID8gdGhpcy5jb2x1bW4uZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKSA6IENlbGwuUFJFUEFSRTtcbiAgICByZXR1cm4gcHJlcGFyZS5jYWxsKG51bGwsIHRoaXMudmFsdWUsIHRoaXMucm93LmdldERhdGEoKSwgdGhpcyk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLmlkO1xuICB9XG5cbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS50aXRsZTtcbiAgfVxuXG4gIGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZ2V0Um93KCkuaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pc0FkZGFibGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaXNFZGl0YWJsZTtcbiAgICB9XG4gIH1cblxufVxuIl19