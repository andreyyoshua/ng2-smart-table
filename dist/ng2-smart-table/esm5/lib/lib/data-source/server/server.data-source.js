import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';
import { map } from 'rxjs/operators';
var ServerDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new ServerSourceConf(conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements()
            .pipe(map(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        })).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.body;
        var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        var httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    };
    ServerDataSource.prototype.createRequesParams = function () {
        var httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    };
    ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
        var _this = this;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
        var _this = this;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    };
    return ServerDataSource;
}(LocalDataSource));
export { ServerDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmRhdGEtc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zb3VyY2Uvc2VydmVyL3NlcnZlci5kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDO0lBQXNDLDRDQUFlO0lBTW5ELDBCQUFzQixJQUFnQixFQUFFLElBQWdDO1FBQWhDLHFCQUFBLEVBQUEsU0FBZ0M7UUFBeEUsWUFDRSxpQkFBTyxTQU9SO1FBUnFCLFVBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBS3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO1NBQ3RHOztJQUNILENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRTthQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNYLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsd0JB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QUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFjO2dCQUM3QyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdkIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbkg7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVTLGdEQUFxQixHQUEvQixVQUFnQyxVQUFzQjtRQUVwRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVFLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RSxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDbEY7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBNUdELENBQXNDLGVBQWUsR0E0R3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi4vbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU2VydmVyU291cmNlQ29uZiB9IGZyb20gJy4vc2VydmVyLXNvdXJjZS5jb25mJztcbmltcG9ydCB7IGdldERlZXBGcm9tT2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIFNlcnZlckRhdGFTb3VyY2UgZXh0ZW5kcyBMb2NhbERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCBjb25mOiBTZXJ2ZXJTb3VyY2VDb25mO1xuXG4gIHByb3RlY3RlZCBsYXN0UmVxdWVzdENvdW50OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LCBjb25mOiBTZXJ2ZXJTb3VyY2VDb25mIHwge30gPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNvbmYgPSBuZXcgU2VydmVyU291cmNlQ29uZihjb25mKTtcblxuICAgIGlmICghdGhpcy5jb25mLmVuZFBvaW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0IGxlYXN0IGVuZFBvaW50IG11c3QgYmUgc3BlY2lmaWVkIGFzIGEgY29uZmlndXJhdGlvbiBvZiB0aGUgc2VydmVyIGRhdGEgc291cmNlLicpO1xuICAgIH1cbiAgfVxuXG4gIGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFJlcXVlc3RDb3VudDtcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEVsZW1lbnRzKClcbiAgICAgIC5waXBlKG1hcChyZXMgPT4ge1xuICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0Q291bnQgPSB0aGlzLmV4dHJhY3RUb3RhbEZyb21SZXNwb25zZShyZXMpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmV4dHJhY3REYXRhRnJvbVJlc3BvbnNlKHJlcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgIH0pKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBhcnJheSBvZiBkYXRhIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIHByb3RlY3RlZCBleHRyYWN0RGF0YUZyb21SZXNwb25zZShyZXM6IGFueSk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHJhd0RhdGEgPSByZXMuYm9keTtcbiAgICBjb25zdCBkYXRhID0gISF0aGlzLmNvbmYuZGF0YUtleSA/IGdldERlZXBGcm9tT2JqZWN0KHJhd0RhdGEsIHRoaXMuY29uZi5kYXRhS2V5LCBbXSkgOiByYXdEYXRhO1xuXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBEYXRhIG11c3QgYmUgYW4gYXJyYXkuXG4gICAgUGxlYXNlIGNoZWNrIHRoYXQgZGF0YSBleHRyYWN0ZWQgZnJvbSB0aGUgc2VydmVyIHJlc3BvbnNlIGJ5IHRoZSBrZXkgJyR7dGhpcy5jb25mLmRhdGFLZXl9JyBleGlzdHMgYW5kIGlzIGFycmF5LmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRvdGFsIHJvd3MgY291bnQgZnJvbSB0aGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIExvb2tzIGZvciB0aGUgY291bnQgaW4gdGhlIGhlZGVycyBmaXJzdCwgdGhlbiBpbiB0aGUgcmVzcG9uc2UgYm9keVxuICAgKiBAcGFyYW0gcmVzXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBwcm90ZWN0ZWQgZXh0cmFjdFRvdGFsRnJvbVJlc3BvbnNlKHJlczogYW55KTogbnVtYmVyIHtcbiAgICBpZiAocmVzLmhlYWRlcnMuaGFzKHRoaXMuY29uZi50b3RhbEtleSkpIHtcbiAgICAgIHJldHVybiArcmVzLmhlYWRlcnMuZ2V0KHRoaXMuY29uZi50b3RhbEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSByZXMuYm9keTtcbiAgICAgIHJldHVybiBnZXREZWVwRnJvbU9iamVjdChyYXdEYXRhLCB0aGlzLmNvbmYudG90YWxLZXksIDApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1ZXN0RWxlbWVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IHRoaXMuY3JlYXRlUmVxdWVzUGFyYW1zKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25mLmVuZFBvaW50LCB7IHBhcmFtczogaHR0cFBhcmFtcywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVSZXF1ZXNQYXJhbXMoKTogSHR0cFBhcmFtcyB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuXG4gICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkU29ydFJlcXVlc3RQYXJhbXMoaHR0cFBhcmFtcyk7XG4gICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkRmlsdGVyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5hZGRQYWdlclJlcXVlc3RQYXJhbXMoaHR0cFBhcmFtcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU29ydFJlcXVlc3RQYXJhbXMoaHR0cFBhcmFtczogSHR0cFBhcmFtcyk6IEh0dHBQYXJhbXMge1xuICAgIGlmICh0aGlzLnNvcnRDb25mKSB7XG4gICAgICB0aGlzLnNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZikgPT4ge1xuICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQodGhpcy5jb25mLnNvcnRGaWVsZEtleSwgZmllbGRDb25mLmZpZWxkKTtcbiAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KHRoaXMuY29uZi5zb3J0RGlyS2V5LCBmaWVsZENvbmYuZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkRmlsdGVyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XG5cbiAgICBpZiAodGhpcy5maWx0ZXJDb25mLmZpbHRlcnMpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZENvbmZbJ3NlYXJjaCddKSB7XG4gICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KHRoaXMuY29uZi5maWx0ZXJGaWVsZEtleS5yZXBsYWNlKCcjZmllbGQjJywgZmllbGRDb25mWydmaWVsZCddKSwgZmllbGRDb25mWydzZWFyY2gnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBodHRwUGFyYW1zO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFBhZ2VyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XG5cbiAgICBpZiAodGhpcy5wYWdpbmdDb25mICYmIHRoaXMucGFnaW5nQ29uZlsncGFnZSddICYmIHRoaXMucGFnaW5nQ29uZlsncGVyUGFnZSddKSB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQodGhpcy5jb25mLnBhZ2VyUGFnZUtleSwgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10pO1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KHRoaXMuY29uZi5wYWdlckxpbWl0S2V5LCB0aGlzLnBhZ2luZ0NvbmZbJ3BlclBhZ2UnXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gIH1cbn1cbiJdfQ==