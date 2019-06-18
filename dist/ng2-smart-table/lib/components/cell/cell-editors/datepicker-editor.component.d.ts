import { OnInit } from '@angular/core';
import { DefaultEditor } from './default-editor';
export declare class DatepickerEditorComponent extends DefaultEditor implements OnInit {
    placeholder: string;
    inputModel: Date;
    constructor();
    ngOnInit(): void;
    onChange(): void;
}
export declare class DatepickerRenderComponent implements OnInit {
    value: string;
    rowData: any;
    constructor();
    ngOnInit(): void;
}
