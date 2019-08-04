import { Subject } from 'rxjs';
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort(),
        }); });
    };
    return DataSource;
}());
export { DataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQUE7UUFFWSxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDckMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ25DLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUF3SGpELENBQUM7SUEvR0MsNEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFnQjtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FB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LEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQzlELE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUU7U0FDckIsQ0FBQyxFQU5vQyxDQU1wQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBN0hELElBNkhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJvdGVjdGVkIG9uQWRkZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByb3RlY3RlZCBvblVwZGF0ZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByb3RlY3RlZCBvblJlbW92ZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgYWJzdHJhY3QgZ2V0QWxsKCk6IFByb21pc2U8YW55PjtcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudHMoKTogUHJvbWlzZTxhbnk+O1xuICBhYnN0cmFjdCBnZXRTb3J0KCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0RmlsdGVyKCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0UGFnaW5nKCk6IGFueTtcbiAgYWJzdHJhY3QgY291bnQoKTogbnVtYmVyO1xuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdyZWZyZXNoJyk7XG4gIH1cblxuICBsb2FkKGRhdGE6IEFycmF5PGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnbG9hZCcpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9uQ2hhbmdlZFNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG9uQWRkZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vbkFkZGVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25VcGRhdGVkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25VcGRhdGVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25SZW1vdmVkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25SZW1vdmVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uQWRkZWQoZWxlbWVudCk7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdwcmVwZW5kJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25BZGRlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2FwcGVuZCcpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGFkZChlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uQWRkZWQoZWxlbWVudCk7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdhZGQnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPblJlbW92ZWQoZWxlbWVudCk7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdyZW1vdmUnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICB1cGRhdGUoZWxlbWVudDogYW55LCB2YWx1ZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25VcGRhdGVkKGVsZW1lbnQpO1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgndXBkYXRlJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgZW1wdHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2VtcHR5Jyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgc2V0U29ydChjb25mOiBBcnJheTxhbnk+LCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdzb3J0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKGNvbmY6IEFycmF5PGFueT4sIGFuZE9wZXJhdG9yPzogYm9vbGVhbiwgZG9FbWl0PzogYm9vbGVhbikge1xuICAgIGlmIChkb0VtaXQpIHtcbiAgICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnZmlsdGVyJyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmlsdGVyKGZpZWxkQ29uZjoge30sIGFuZE9wZXJhdG9yPzogYm9vbGVhbiwgZG9FbWl0PzogYm9vbGVhbikge1xuICAgIGlmIChkb0VtaXQpIHtcbiAgICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnZmlsdGVyJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFnaW5nKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdwYWdpbmcnKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlciwgZG9FbWl0PzogYm9vbGVhbikge1xuICAgIGlmIChkb0VtaXQpIHtcbiAgICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgncGFnZScpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBlbWl0T25SZW1vdmVkKGVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMub25SZW1vdmVkU291cmNlLm5leHQoZWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9uVXBkYXRlZChlbGVtZW50OiBhbnkpIHtcbiAgICB0aGlzLm9uVXBkYXRlZFNvdXJjZS5uZXh0KGVsZW1lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVtaXRPbkFkZGVkKGVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMub25BZGRlZFNvdXJjZS5uZXh0KGVsZW1lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVtaXRPbkNoYW5nZWQoYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmdldEVsZW1lbnRzKCkudGhlbigoZWxlbWVudHMpID0+IHRoaXMub25DaGFuZ2VkU291cmNlLm5leHQoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBlbGVtZW50czogZWxlbWVudHMsXG4gICAgICBwYWdpbmc6IHRoaXMuZ2V0UGFnaW5nKCksXG4gICAgICBmaWx0ZXI6IHRoaXMuZ2V0RmlsdGVyKCksXG4gICAgICBzb3J0OiB0aGlzLmdldFNvcnQoKSxcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==