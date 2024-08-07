"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementReadyEvent = exports.RenderCompleteEvent = exports.MagicChangeEvent = void 0;
class MagicChangeEvent extends Event {
    constructor(src, oldValue, newValue) {
        super("magic-change", { bubbles: true, cancelable: true });
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.src = src;
    }
}
exports.MagicChangeEvent = MagicChangeEvent;
MagicChangeEvent.Type = "magic-change";
class RenderCompleteEvent extends Event {
    constructor(src) {
        super("render-complete", { bubbles: true, cancelable: true });
        this.src = src;
    }
}
exports.RenderCompleteEvent = RenderCompleteEvent;
RenderCompleteEvent.Type = "render-complete";
class ElementReadyEvent extends Event {
    constructor(src) {
        super("element-ready", { bubbles: true, cancelable: true });
        this.src = src;
    }
}
exports.ElementReadyEvent = ElementReadyEvent;
ElementReadyEvent.Type = "element-ready";
