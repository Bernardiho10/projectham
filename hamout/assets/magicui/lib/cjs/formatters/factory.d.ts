import type { Formatter } from "./index.js";
export declare class FormatterFactory {
    instance: Formatter;
    constructor(type?: string);
    Format(v: any, data: any): string;
}
