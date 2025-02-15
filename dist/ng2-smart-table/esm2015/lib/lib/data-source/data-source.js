import { Subject } from 'rxjs';
export class DataSource {
    constructor() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    refresh() {
        this.emitOnChanged('refresh');
    }
    load(data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prepend(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    }
    append(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    }
    add(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    }
    remove(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    }
    update(element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    }
    empty() {
        this.emitOnChanged('empty');
        return Promise.resolve();
    }
    setSort(conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    }
    setFilter(conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    addFilter(fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    setPaging(page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    }
    setPage(page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE1BQU0sT0FBZ0IsVUFBVTtJQUFoQztRQUVZLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQXdIakQsQ0FBQztJQS9HQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQWdCO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFB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LElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDckIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2VkU291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcm90ZWN0ZWQgb25BZGRlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJvdGVjdGVkIG9uVXBkYXRlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJvdGVjdGVkIG9uUmVtb3ZlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBhYnN0cmFjdCBnZXRBbGwoKTogUHJvbWlzZTxhbnk+O1xuICBhYnN0cmFjdCBnZXRFbGVtZW50cygpOiBQcm9taXNlPGFueT47XG4gIGFic3RyYWN0IGdldFNvcnQoKTogYW55O1xuICBhYnN0cmFjdCBnZXRGaWx0ZXIoKTogYW55O1xuICBhYnN0cmFjdCBnZXRQYWdpbmcoKTogYW55O1xuICBhYnN0cmFjdCBjb3VudCgpOiBudW1iZXI7XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3JlZnJlc2gnKTtcbiAgfVxuXG4gIGxvYWQoZGF0YTogQXJyYXk8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdsb2FkJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25DaGFuZ2VkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25BZGRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9uQWRkZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvblVwZGF0ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vblVwZGF0ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvblJlbW92ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vblJlbW92ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25BZGRlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3ByZXBlbmQnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPbkFkZGVkKGVsZW1lbnQpO1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnYXBwZW5kJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgYWRkKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5lbWl0T25BZGRlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2FkZCcpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uUmVtb3ZlZChlbGVtZW50KTtcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3JlbW92ZScpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZShlbGVtZW50OiBhbnksIHZhbHVlczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmVtaXRPblVwZGF0ZWQoZWxlbWVudCk7XG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCd1cGRhdGUnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBlbXB0eSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnZW1wdHknKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBzZXRTb3J0KGNvbmY6IEFycmF5PGFueT4sIGRvRW1pdD86IGJvb2xlYW4pIHtcbiAgICBpZiAoZG9FbWl0KSB7XG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3NvcnQnKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoY29uZjogQXJyYXk8YW55PiwgYW5kT3BlcmF0b3I/OiBib29sZWFuLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdmaWx0ZXInKTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWx0ZXIoZmllbGRDb25mOiB7fSwgYW5kT3BlcmF0b3I/OiBib29sZWFuLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdmaWx0ZXInKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdpbmcocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIsIGRvRW1pdD86IGJvb2xlYW4pIHtcbiAgICBpZiAoZG9FbWl0KSB7XG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3BhZ2luZycpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogbnVtYmVyLCBkb0VtaXQ/OiBib29sZWFuKSB7XG4gICAgaWYgKGRvRW1pdCkge1xuICAgICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdwYWdlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGVtaXRPblJlbW92ZWQoZWxlbWVudDogYW55KSB7XG4gICAgdGhpcy5vblJlbW92ZWRTb3VyY2UubmV4dChlbGVtZW50KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBlbWl0T25VcGRhdGVkKGVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMub25VcGRhdGVkU291cmNlLm5leHQoZWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9uQWRkZWQoZWxlbWVudDogYW55KSB7XG4gICAgdGhpcy5vbkFkZGVkU291cmNlLm5leHQoZWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdE9uQ2hhbmdlZChhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuZ2V0RWxlbWVudHMoKS50aGVuKChlbGVtZW50cykgPT4gdGhpcy5vbkNoYW5nZWRTb3VyY2UubmV4dCh7XG4gICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50cyxcbiAgICAgIHBhZ2luZzogdGhpcy5nZXRQYWdpbmcoKSxcbiAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoKSxcbiAgICAgIHNvcnQ6IHRoaXMuZ2V0U29ydCgpLFxuICAgIH0pKTtcbiAgfVxufVxuIl19