export class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwucGFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLnBhZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBRXJCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBZ0IsRUFBRSxJQUFZLEVBQUUsT0FBZTtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9jYWxQYWdlciB7XG5cbiAgc3RhdGljIHBhZ2luYXRlKGRhdGE6IEFycmF5PGFueT4sIHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIGRhdGEuc2xpY2UocGVyUGFnZSAqIChwYWdlIC0gMSksIHBlclBhZ2UgKiBwYWdlKTtcbiAgfVxufVxuIl19