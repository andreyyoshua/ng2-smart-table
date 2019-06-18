import { OnInit } from '@angular/core';
import { DefaultFilter } from './default-filter';
export declare class DateFilterComponent extends DefaultFilter implements OnInit {
    inputModel: any;
    datepickerType: string;
    datepickerSelectMode: string;
    datepickerPlaceholder: string;
    constructor();
    resetFilter(): void;
    ngOnInit(): void;
    static filterFunction(value: string, query: string): boolean;
    dateToUTCDateString(date: Date): string;
    onChange(): void;
}
