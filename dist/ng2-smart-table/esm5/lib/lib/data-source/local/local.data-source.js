import * as tslib_1 from "tslib";
import { LocalSorter } from './local.sorter';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { DataSource } from '../data-source';
import { deepExtend } from '../../helpers';
var LocalDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(LocalDataSource, _super);
    function LocalDataSource(data) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this) || this;
        _this.data = [];
        _this.filteredAndSorted = [];
        _this.sortConf = [];
        _this.filterConf = {
            filters: [],
            andOperator: true,
        };
        _this.pagingConf = {};
        _this.data = data;
        return _this;
    }
    LocalDataSource.prototype.load = function (data) {
        this.data = data;
        return _super.prototype.load.call(this, data);
    };
    LocalDataSource.prototype.prepend = function (element) {
        this.reset(true);
        this.data.unshift(element);
        return _super.prototype.prepend.call(this, element);
    };
    LocalDataSource.prototype.append = function (element) {
        this.reset(true);
        this.data.push(element);
        return _super.prototype.append.call(this, element);
    };
    LocalDataSource.prototype.add = function (element) {
        this.data.push(element);
        return _super.prototype.add.call(this, element);
    };
    LocalDataSource.prototype.remove = function (element) {
        this.data = this.data.filter(function (el) { return el !== element; });
        return _super.prototype.remove.call(this, element);
    };
    LocalDataSource.prototype.update = function (element, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.find(element).then(function (found) {
                found = deepExtend(found, values);
                _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    LocalDataSource.prototype.find = function (element) {
        var found = this.data.find(function (el) { return el === element; });
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    };
    LocalDataSource.prototype.getElements = function () {
        var data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    };
    LocalDataSource.prototype.getFilteredAndSorted = function () {
        var data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    };
    LocalDataSource.prototype.getAll = function () {
        var data = this.data.slice(0);
        return Promise.resolve(data);
    };
    LocalDataSource.prototype.reset = function (silent) {
        if (silent === void 0) { silent = false; }
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    };
    LocalDataSource.prototype.empty = function () {
        this.data = [];
        return _super.prototype.empty.call(this);
    };
    LocalDataSource.prototype.count = function () {
        return this.filteredAndSorted.length;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        if (conf !== null) {
            conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        _super.prototype.setSort.call(this, conf, doEmit);
        return this;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (conf && conf.length > 0) {
            conf.forEach(function (fieldConf) {
                _this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        var found = false;
        this.filterConf.filters.forEach(function (currentFieldConf, index) {
            if (currentFieldConf['field'] === fieldConf['field']) {
                _this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        _super.prototype.setPaging.call(this, page, perPage, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        _super.prototype.setPage.call(this, page, doEmit);
        return this;
    };
    LocalDataSource.prototype.getSort = function () {
        return this.sortConf;
    };
    LocalDataSource.prototype.getFilter = function () {
        return this.filterConf;
    };
    LocalDataSource.prototype.getPaging = function () {
        return this.pagingConf;
    };
    LocalDataSource.prototype.prepareData = function (data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    };
    LocalDataSource.prototype.sort = function (data) {
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    };
    // TODO: refactor?
    LocalDataSource.prototype.filter = function (data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                var mergedData_1 = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        mergedData_1 = mergedData_1.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData_1.filter(function (elem, pos, arr) {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    };
    LocalDataSource.prototype.paginate = function (data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    };
    return LocalDataSource;
}(DataSource));
export { LocalDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQXFDLDJDQUFVO0lBVzdDLHlCQUFZLElBQXFCO1FBQXJCLHFCQUFBLEVBQUEsU0FBcUI7UUFBakMsWUFDRSxpQkFBTyxTQUdSO1FBYlMsVUFBSSxHQUFlLEVBQUUsQ0FBQztRQUN0Qix1QkFBaUIsR0FBZSxFQUFFLENBQUM7UUFDbkMsY0FBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixnQkFBVSxHQUFRO1lBQzFCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUNRLGdCQUFVLEdBQVEsRUFBRSxDQUFDO1FBSzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNuQixDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQWdCO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8saUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMs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QVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDdkY7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFuUUQsQ0FBcUMsVUFBVSxHQW1ROUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbFNvcnRlciB9IGZyb20gJy4vbG9jYWwuc29ydGVyJztcbmltcG9ydCB7IExvY2FsRmlsdGVyIH0gZnJvbSAnLi9sb2NhbC5maWx0ZXInO1xuaW1wb3J0IHsgTG9jYWxQYWdlciB9IGZyb20gJy4vbG9jYWwucGFnZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL2RhdGEtc291cmNlJztcbmltcG9ydCB7IGRlZXBFeHRlbmQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIExvY2FsRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHByb3RlY3RlZCBmaWx0ZXJlZEFuZFNvcnRlZDogQXJyYXk8YW55PiA9IFtdO1xuICBwcm90ZWN0ZWQgc29ydENvbmY6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJvdGVjdGVkIGZpbHRlckNvbmY6IGFueSA9IHtcbiAgICBmaWx0ZXJzOiBbXSxcbiAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcbiAgfTtcbiAgcHJvdGVjdGVkIHBhZ2luZ0NvbmY6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEFycmF5PGFueT4gPSBbXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgbG9hZChkYXRhOiBBcnJheTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIHN1cGVyLmxvYWQoZGF0YSk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcblxuICAgIHRoaXMuZGF0YS51bnNoaWZ0KGVsZW1lbnQpO1xuICAgIHJldHVybiBzdXBlci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcblxuICAgIHRoaXMuZGF0YS5wdXNoKGVsZW1lbnQpO1xuICAgIHJldHVybiBzdXBlci5hcHBlbmQoZWxlbWVudCk7XG4gIH1cblxuICBhZGQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEucHVzaChlbGVtZW50KTtcblxuICAgIHJldHVybiBzdXBlci5hZGQoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtZW50KTtcblxuICAgIHJldHVybiBzdXBlci5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICB1cGRhdGUoZWxlbWVudDogYW55LCB2YWx1ZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZmluZChlbGVtZW50KS50aGVuKChmb3VuZCkgPT4ge1xuICAgICAgICBmb3VuZCA9IGRlZXBFeHRlbmQoZm91bmQsIHZhbHVlcyk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShmb3VuZCwgdmFsdWVzKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZChlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5kYXRhLmZpbmQoZWwgPT4gZWwgPT09IGVsZW1lbnQpO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRWxlbWVudCB3YXMgbm90IGZvdW5kIGluIHRoZSBkYXRhc2V0JykpO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcmVwYXJlRGF0YShkYXRhKSk7XG4gIH1cblxuICBnZXRGaWx0ZXJlZEFuZFNvcnRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xuICAgIHRoaXMucHJlcGFyZURhdGEoZGF0YSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmZpbHRlcmVkQW5kU29ydGVkKTtcbiAgfVxuXG4gIGdldEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgfVxuXG4gIHJlc2V0KHNpbGVudCA9IGZhbHNlKSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgdGhpcy5maWx0ZXJDb25mID0ge1xuICAgICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgICAgYW5kT3BlcmF0b3I6IHRydWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5zb3J0Q29uZiA9IFtdO1xuICAgICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEZpbHRlcihbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5zZXRTb3J0KFtdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNldFBhZ2UoMSk7XG4gICAgfVxuICB9XG5cbiAgZW1wdHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcblxuICAgIHJldHVybiBzdXBlci5lbXB0eSgpO1xuICB9XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEFuZFNvcnRlZC5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQXJyYXkgb2YgY29uZiBvYmplY3RzXG4gICAqIFtcbiAgICogIHtmaWVsZDogc3RyaW5nLCBkaXJlY3Rpb246IGFzY3xkZXNjfG51bGwsIGNvbXBhcmU6IEZ1bmN0aW9ufG51bGx9LFxuICAgKiBdXG4gICAqIEBwYXJhbSBjb25mXG4gICAqIEBwYXJhbSBkb0VtaXRcbiAgICogQHJldHVybnMge0xvY2FsRGF0YVNvdXJjZX1cbiAgICovXG4gIHNldFNvcnQoY29uZjogQXJyYXk8YW55PiwgZG9FbWl0ID0gdHJ1ZSk6IExvY2FsRGF0YVNvdXJjZSB7XG4gICAgaWYgKGNvbmYgIT09IG51bGwpIHtcblxuICAgICAgY29uZi5mb3JFYWNoKChmaWVsZENvbmYpID0+IHtcbiAgICAgICAgaWYgKCFmaWVsZENvbmZbJ2ZpZWxkJ10gfHwgdHlwZW9mIGZpZWxkQ29uZlsnZGlyZWN0aW9uJ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3J0IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc29ydENvbmYgPSBjb25mO1xuICAgIH1cblxuICAgIHN1cGVyLnNldFNvcnQoY29uZiwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBcnJheSBvZiBjb25mIG9iamVjdHNcbiAgICogW1xuICAgKiAge2ZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBmaWx0ZXI6IEZ1bmN0aW9ufG51bGx9LFxuICAgKiBdXG4gICAqIEBwYXJhbSBjb25mXG4gICAqIEBwYXJhbSBhbmRPcGVyYXRvclxuICAgKiBAcGFyYW0gZG9FbWl0XG4gICAqIEByZXR1cm5zIHtMb2NhbERhdGFTb3VyY2V9XG4gICAqL1xuICBzZXRGaWx0ZXIoY29uZjogQXJyYXk8YW55PiwgYW5kT3BlcmF0b3IgPSB0cnVlLCBkb0VtaXQgPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICBpZiAoY29uZiAmJiBjb25mLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmYuZm9yRWFjaCgoZmllbGRDb25mKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRmlsdGVyKGZpZWxkQ29uZiwgYW5kT3BlcmF0b3IsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckNvbmYgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQ29uZi5hbmRPcGVyYXRvciA9IGFuZE9wZXJhdG9yO1xuICAgIHRoaXMucGFnaW5nQ29uZlsncGFnZSddID0gMTtcblxuICAgIHN1cGVyLnNldEZpbHRlcihjb25mLCBhbmRPcGVyYXRvciwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEZpbHRlcihmaWVsZENvbmY6IGFueSwgYW5kT3BlcmF0b3IgPSB0cnVlLCBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICBpZiAoIWZpZWxkQ29uZlsnZmllbGQnXSB8fCB0eXBlb2YgZmllbGRDb25mWydzZWFyY2gnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZCcpO1xuICAgIH1cblxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGN1cnJlbnRGaWVsZENvbmY6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRGaWVsZENvbmZbJ2ZpZWxkJ10gPT09IGZpZWxkQ29uZlsnZmllbGQnXSkge1xuICAgICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVyc1tpbmRleF0gPSBmaWVsZENvbmY7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVycy5wdXNoKGZpZWxkQ29uZik7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQ29uZi5hbmRPcGVyYXRvciA9IGFuZE9wZXJhdG9yO1xuICAgIHN1cGVyLmFkZEZpbHRlcihmaWVsZENvbmYsIGFuZE9wZXJhdG9yLCBkb0VtaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UGFnaW5nKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyLCBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICB0aGlzLnBhZ2luZ0NvbmZbJ3BhZ2UnXSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10gPSBwZXJQYWdlO1xuXG4gICAgc3VwZXIuc2V0UGFnaW5nKHBhZ2UsIHBlclBhZ2UsIGRvRW1pdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlciwgZG9FbWl0OiBib29sZWFuID0gdHJ1ZSk6IExvY2FsRGF0YVNvdXJjZSB7XG4gICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSBwYWdlO1xuICAgIHN1cGVyLnNldFBhZ2UocGFnZSwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFNvcnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zb3J0Q29uZjtcbiAgfVxuXG4gIGdldEZpbHRlcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckNvbmY7XG4gIH1cblxuICBnZXRQYWdpbmcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmdDb25mO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVEYXRhKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICBkYXRhID0gdGhpcy5maWx0ZXIoZGF0YSk7XG4gICAgZGF0YSA9IHRoaXMuc29ydChkYXRhKTtcbiAgICB0aGlzLmZpbHRlcmVkQW5kU29ydGVkID0gZGF0YS5zbGljZSgwKTtcblxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKGRhdGEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNvcnQoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnNvcnRDb25mKSB7XG4gICAgICB0aGlzLnNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZikgPT4ge1xuICAgICAgICBkYXRhID0gTG9jYWxTb3J0ZXJcbiAgICAgICAgICAuc29ydChkYXRhLCBmaWVsZENvbmZbJ2ZpZWxkJ10sIGZpZWxkQ29uZlsnZGlyZWN0aW9uJ10sIGZpZWxkQ29uZlsnY29tcGFyZSddKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIFRPRE86IHJlZmFjdG9yP1xuICBwcm90ZWN0ZWQgZmlsdGVyKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICBpZiAodGhpcy5maWx0ZXJDb25mLmZpbHRlcnMpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlckNvbmYuYW5kT3BlcmF0b3IpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRDb25mWydzZWFyY2gnXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYXRhID0gTG9jYWxGaWx0ZXJcbiAgICAgICAgICAgICAgLmZpbHRlcihkYXRhLCBmaWVsZENvbmZbJ2ZpZWxkJ10sIGZpZWxkQ29uZlsnc2VhcmNoJ10sIGZpZWxkQ29uZlsnZmlsdGVyJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbWVyZ2VkRGF0YTogYW55ID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkQ29uZlsnc2VhcmNoJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVyZ2VkRGF0YSA9IG1lcmdlZERhdGEuY29uY2F0KExvY2FsRmlsdGVyXG4gICAgICAgICAgICAgIC5maWx0ZXIoZGF0YSwgZmllbGRDb25mWydmaWVsZCddLCBmaWVsZENvbmZbJ3NlYXJjaCddLCBmaWVsZENvbmZbJ2ZpbHRlciddKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVtb3ZlIG5vbiB1bmlxdWUgaXRlbXNcbiAgICAgICAgZGF0YSA9IG1lcmdlZERhdGEuZmlsdGVyKChlbGVtOiBhbnksIHBvczogYW55LCBhcnI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFnaW5hdGUoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnBhZ2luZ0NvbmYgJiYgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gJiYgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10pIHtcbiAgICAgIGRhdGEgPSBMb2NhbFBhZ2VyLnBhZ2luYXRlKGRhdGEsIHRoaXMucGFnaW5nQ29uZlsncGFnZSddLCB0aGlzLnBhZ2luZ0NvbmZbJ3BlclBhZ2UnXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=