import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
let TbodyEditDeleteComponent = class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TbodyEditDeleteComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TbodyEditDeleteComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], TbodyEditDeleteComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "edit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "delete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
TbodyEditDeleteComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-st-tbody-edit-delete',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `
    })
], TbodyEditDeleteComponent);
export { TbodyEditDeleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLWFuZHJleXlvc2h1YS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2VkaXQtZGVsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVlsRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQVZyQztRQWtCWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUEyQ3BELENBQUM7SUFwQ0MsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0YsQ0FBQTtBQW5EVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJO3NEQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7c0NBQU0sR0FBRztxREFBQztBQUNUO0lBQVIsS0FBSyxFQUFFO3NDQUFTLFVBQVU7d0RBQUM7QUFDbkI7SUFBUixLQUFLLEVBQUU7c0NBQWdCLFlBQVk7K0RBQU07QUFDakM7SUFBUixLQUFLLEVBQUU7c0NBQWMsWUFBWTs2REFBTTtBQUU5QjtJQUFULE1BQU0sRUFBRTs7c0RBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOzt3REFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7OytEQUF5QztBQVZ2Qyx3QkFBd0I7SUFWcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxRQUFRLEVBQUU7Ozs7O0dBS1Q7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBcURwQztTQXJEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktZWRpdC1kZWxldGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiaXNBY3Rpb25FZGl0XCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tZWRpdC1lZGl0XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJlZGl0Um93QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiPjwvYT5cbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1kZWxldGUtZGVsZXRlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJkZWxldGVSb3dCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIj48L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgZWRpdFJvd0J1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgZGVsZXRlUm93QnV0dG9uQ29udGVudDogc3RyaW5nO1xuXG4gIG9uRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZWRpdFJvd1NlbGVjdC5lbWl0KHRoaXMucm93KTtcblxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmVkaXQuZW1pdCh7XG4gICAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuZWRpdCh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKSA9PT0gJ2V4dGVybmFsJykge1xuICAgICAgdGhpcy5kZWxldGUuZW1pdCh7XG4gICAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuZGVsZXRlKHRoaXMucm93LCB0aGlzLmRlbGV0ZUNvbmZpcm0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgdGhpcy5pc0FjdGlvbkVkaXQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5lZGl0Jyk7XG4gICAgdGhpcy5pc0FjdGlvbkRlbGV0ZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpO1xuICAgIHRoaXMuZWRpdFJvd0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5lZGl0QnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuZGVsZXRlUm93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdkZWxldGUuZGVsZXRlQnV0dG9uQ29udGVudCcpO1xuICB9XG59XG4iXX0=