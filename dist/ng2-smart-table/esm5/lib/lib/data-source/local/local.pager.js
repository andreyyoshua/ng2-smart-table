var LocalPager = /** @class */ (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());
export { LocalPager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwucGFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5wYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBS0EsQ0FBQztJQUhRLG1CQUFRLEdBQWYsVUFBZ0IsSUFBZ0IsRUFBRSxJQUFZLEVBQUUsT0FBZTtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2NhbFBhZ2VyIHtcblxuICBzdGF0aWMgcGFnaW5hdGUoZGF0YTogQXJyYXk8YW55PiwgcGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gZGF0YS5zbGljZShwZXJQYWdlICogKHBhZ2UgLSAxKSwgcGVyUGFnZSAqIHBhZ2UpO1xuICB9XG59XG4iXX0=