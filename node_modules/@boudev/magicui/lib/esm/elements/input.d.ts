import { ViewModel } from "../viewmodel.js";
import { MagicElement } from "./index.js";
import type { RenderableElement } from "./elements.js";
export declare class InputMagicElement extends MagicElement {
    element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLTimeElement | null;
    constructor(id: string, name?: string);
    dispatchChange(self: InputMagicElement): (this: HTMLInputElement) => void;
    isInputElement(): boolean;
    hydrate(vm: ViewModel, value: string | null): void;
}
export declare class HiddenInputMagicElement extends InputMagicElement {
}
export declare class NumberInputMagicElement extends InputMagicElement {
    getValue(): any;
}
export declare class DateInputMagicElement extends InputMagicElement {
    getValue(): any;
}
export declare class BooleanInputMagicElement extends InputMagicElement {
    value: boolean;
    getValue(): any;
}
export declare class FloatInputMagicElement extends InputMagicElement {
    value: number;
    getValue(): any;
}
export declare class SelectInputMagicElement extends InputMagicElement implements RenderableElement {
    element: HTMLSelectElement | null;
    render(options: Array<Record<string, any>>): null | undefined;
    transform(data: Array<Record<string, any>>): Array<Record<string, any>>;
}
