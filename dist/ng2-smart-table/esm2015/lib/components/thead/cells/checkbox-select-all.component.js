import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
let CheckboxSelectAllComponent = class CheckboxSelectAllComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], CheckboxSelectAllComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], CheckboxSelectAllComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
CheckboxSelectAllComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-checkbox-select-all]',
        template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `
    })
], CheckboxSelectAllComponent);
export { CheckboxSelectAllComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUtYW5kcmV5eW9zaHVhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFRbEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7Q0FLdEMsQ0FBQTtBQUhVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7d0RBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVOzBEQUFDO0FBQ25CO0lBQVIsS0FBSyxFQUFFOztpRUFBd0I7QUFKckIsMEJBQTBCO0lBTnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4QkFBOEI7UUFDeEMsUUFBUSxFQUFFOztHQUVUO0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQUt0QztTQUxZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW25nTW9kZWxdPVwiaXNBbGxTZWxlY3RlZFwiPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xufVxuIl19