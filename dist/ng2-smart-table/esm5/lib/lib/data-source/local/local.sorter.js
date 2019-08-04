export function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
var LocalSorter = /** @class */ (function () {
    function LocalSorter() {
    }
    LocalSorter.sort = function (data, field, direction, customCompare) {
        var dir = (direction === 'asc') ? 1 : -1;
        var compare = customCompare ? customCompare : compareValues;
        return data.sort(function (a, b) {
            return compare.call(null, dir, a[field], b[field]);
        });
    };
    return LocalSorter;
}());
export { LocalSorter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc29ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxhQUFhLENBQUMsU0FBYyxFQUFFLENBQU0sRUFBRSxDQUFNO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNULE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRDtJQUFBO0lBV0EsQ0FBQztJQVRRLGdCQUFJLEdBQVgsVUFBWSxJQUFnQixFQUFFLEtBQWEsRUFBRSxTQUFpQixFQUFFLGFBQXdCO1FBRXRGLElBQU0sR0FBRyxHQUFXLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQU0sT0FBTyxHQUFhLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFFeEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcGFyZVZhbHVlcyhkaXJlY3Rpb246IGFueSwgYTogYW55LCBiOiBhbnkpIHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xICogZGlyZWN0aW9uO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFNvcnRlciB7XG5cbiAgc3RhdGljIHNvcnQoZGF0YTogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcsIGN1c3RvbUNvbXBhcmU/OiBGdW5jdGlvbik6IEFycmF5PGFueT4ge1xuXG4gICAgY29uc3QgZGlyOiBudW1iZXIgPSAoZGlyZWN0aW9uID09PSAnYXNjJykgPyAxIDogLTE7XG4gICAgY29uc3QgY29tcGFyZTogRnVuY3Rpb24gPSBjdXN0b21Db21wYXJlID8gY3VzdG9tQ29tcGFyZSA6IGNvbXBhcmVWYWx1ZXM7XG5cbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gY29tcGFyZS5jYWxsKG51bGwsIGRpciwgYVtmaWVsZF0sIGJbZmllbGRdKTtcbiAgICB9KTtcbiAgfVxufVxuIl19