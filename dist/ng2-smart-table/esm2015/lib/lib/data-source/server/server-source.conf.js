export class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXNvdXJjZS5jb25mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zb3VyY2Uvc2VydmVyL3NlcnZlci1zb3VyY2UuY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sZ0JBQWdCO0lBb0IzQixZQUNFLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQ2pELFlBQVksR0FBRyxFQUFFLEVBQUUsYUFBYSxHQUFHLEVBQUUsRUFBRSxjQUFjLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUU7UUFFaEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN0RixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQy9ELENBQUM7O0FBL0J5QiwrQkFBYyxHQUFHLE9BQU8sQ0FBQztBQUN6Qiw2QkFBWSxHQUFHLFFBQVEsQ0FBQztBQUN4QiwrQkFBYyxHQUFHLE9BQU8sQ0FBQztBQUN6QixnQ0FBZSxHQUFHLFFBQVEsQ0FBQztBQUMzQixpQ0FBZ0IsR0FBRyxjQUFjLENBQUM7QUFDbEMsMEJBQVMsR0FBRyxlQUFlLENBQUM7QUFDNUIseUJBQVEsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VydmVyU291cmNlQ29uZiB7XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBTT1JUX0ZJRUxEX0tFWSA9ICdfc29ydCc7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgU09SVF9ESVJfS0VZID0gJ19vcmRlcic7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgUEFHRVJfUEFHRV9LRVkgPSAnX3BhZ2UnO1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IFBBR0VSX0xJTUlUX0tFWSA9ICdfbGltaXQnO1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IEZJTFRFUl9GSUVMRF9LRVkgPSAnI2ZpZWxkI19saWtlJztcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBUT1RBTF9LRVkgPSAneC10b3RhbC1jb3VudCc7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgREFUQV9LRVkgPSAnJztcblxuICBlbmRQb2ludDogc3RyaW5nO1xuXG4gIHNvcnRGaWVsZEtleTogc3RyaW5nO1xuICBzb3J0RGlyS2V5OiBzdHJpbmc7XG4gIHBhZ2VyUGFnZUtleTogc3RyaW5nO1xuICBwYWdlckxpbWl0S2V5OiBzdHJpbmc7XG4gIGZpbHRlckZpZWxkS2V5OiBzdHJpbmc7XG4gIHRvdGFsS2V5OiBzdHJpbmc7XG4gIGRhdGFLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB7IGVuZFBvaW50ID0gJycsIHNvcnRGaWVsZEtleSA9ICcnLCBzb3J0RGlyS2V5ID0gJycsXG4gICAgICBwYWdlclBhZ2VLZXkgPSAnJywgcGFnZXJMaW1pdEtleSA9ICcnLCBmaWx0ZXJGaWVsZEtleSA9ICcnLCB0b3RhbEtleSA9ICcnLCBkYXRhS2V5ID0gJycgfSA9IHt9KSB7XG5cbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnQgPyBlbmRQb2ludCA6ICcnO1xuXG4gICAgdGhpcy5zb3J0RmllbGRLZXkgPSBzb3J0RmllbGRLZXkgPyBzb3J0RmllbGRLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLlNPUlRfRklFTERfS0VZO1xuICAgIHRoaXMuc29ydERpcktleSA9IHNvcnREaXJLZXkgPyBzb3J0RGlyS2V5IDogU2VydmVyU291cmNlQ29uZi5TT1JUX0RJUl9LRVk7XG4gICAgdGhpcy5wYWdlclBhZ2VLZXkgPSBwYWdlclBhZ2VLZXkgPyBwYWdlclBhZ2VLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLlBBR0VSX1BBR0VfS0VZO1xuICAgIHRoaXMucGFnZXJMaW1pdEtleSA9IHBhZ2VyTGltaXRLZXkgPyBwYWdlckxpbWl0S2V5IDogU2VydmVyU291cmNlQ29uZi5QQUdFUl9MSU1JVF9LRVk7XG4gICAgdGhpcy5maWx0ZXJGaWVsZEtleSA9IGZpbHRlckZpZWxkS2V5ID8gZmlsdGVyRmllbGRLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLkZJTFRFUl9GSUVMRF9LRVk7XG4gICAgdGhpcy50b3RhbEtleSA9IHRvdGFsS2V5ID8gdG90YWxLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLlRPVEFMX0tFWTtcbiAgICB0aGlzLmRhdGFLZXkgPSBkYXRhS2V5ID8gZGF0YUtleSA6IFNlcnZlclNvdXJjZUNvbmYuREFUQV9LRVk7XG4gIH1cbn1cbiJdfQ==