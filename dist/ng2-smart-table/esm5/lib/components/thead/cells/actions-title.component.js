import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
var ActionsTitleComponent = /** @class */ (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.prototype.ngOnChanges = function () {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], ActionsTitleComponent.prototype, "grid", void 0);
    ActionsTitleComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-actions-title]',
            template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ActionsTitleComponent);
    return ActionsTitleComponent;
}());
export { ActionsTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvYWN0aW9ucy10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFpQixVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUXpDO0lBTUUsK0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ25DLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7dURBQUM7SUFGVCxxQkFBcUI7UUFOakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUseUVBRVQ7U0FDRixDQUFDO2lEQU95QixVQUFVO09BTnhCLHFCQUFxQixDQWdCakM7SUFBRCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hY3Rpb25zLXRpdGxlXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC10aXRsZVwiPnt7IGFjdGlvbnNDb2x1bW5UaXRsZSB9fTwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25zVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG5cbiAgYWN0aW9uc0NvbHVtblRpdGxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFjdGlvbnNDb2x1bW5UaXRsZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmNvbHVtblRpdGxlJyk7XG4gIH1cbn1cbiJdfQ==