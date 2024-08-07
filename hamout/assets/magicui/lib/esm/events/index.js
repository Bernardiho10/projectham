export class MagicChangeEvent extends Event {
    constructor(src, oldValue, newValue) {
        super("magic-change", { bubbles: true, cancelable: true });
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.src = src;
    }
}
MagicChangeEvent.Type = "magic-change";
export class RenderCompleteEvent extends Event {
    constructor(src) {
        super("render-complete", { bubbles: true, cancelable: true });
        this.src = src;
    }
}
RenderCompleteEvent.Type = "render-complete";
export class ElementReadyEvent extends Event {
    constructor(src) {
        super("element-ready", { bubbles: true, cancelable: true });
        this.src = src;
    }
}
ElementReadyEvent.Type = "element-ready";
