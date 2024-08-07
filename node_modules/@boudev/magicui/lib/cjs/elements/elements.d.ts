import { ViewModel } from "../viewmodel.js";
export interface RenderableElement {
    render(data: Array<Record<string, any>>): void;
    transform(data: Array<Record<string, any>>): Array<Record<string, any>>;
}
export declare class MagicElement {
    id: string;
    name: string;
    value: any;
    element: Element | null;
    vm: ViewModel | null;
    classes: Array<string>;
    constructor(id: string, name?: string);
    hydrate(vm: ViewModel, value: string | null): void;
    AddClass(names: string): this;
    getValue(): any;
    addEventTrigger(on: string, eventHandler: (vm: ViewModel, e?: Event) => void): this;
}
export declare class TextMagicElement extends MagicElement {
}
export declare class ButtonMagicElement extends MagicElement {
    constructor(id: string);
    OnClick(eventHandler: (vm: ViewModel) => void): this;
}
