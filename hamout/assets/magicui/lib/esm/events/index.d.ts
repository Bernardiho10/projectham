import type { MagicElement } from "../elements/index.js";
export declare class MagicChangeEvent extends Event {
    static readonly Type = "magic-change";
    oldValue: string;
    newValue: string;
    src: MagicElement;
    constructor(src: MagicElement, oldValue: string, newValue: string);
}
export declare class RenderCompleteEvent extends Event {
    static readonly Type = "render-complete";
    src: MagicElement;
    constructor(src: MagicElement);
}
export declare class ElementReadyEvent extends Event {
    static readonly Type = "element-ready";
    src: MagicElement;
    constructor(src: MagicElement);
}
