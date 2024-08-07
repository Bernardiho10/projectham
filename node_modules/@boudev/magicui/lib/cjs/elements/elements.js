"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMagicElement = exports.TextMagicElement = exports.MagicElement = void 0;
const index_js_1 = require("../events/index.js");
class MagicElement {
    constructor(id, name) {
        this.id = "";
        this.name = "";
        this.value = "";
        this.element = null;
        this.vm = null;
        this.classes = [];
        if (name == undefined) {
            name = id;
        }
        this.id = id;
        this.name = name;
        this.element = document.querySelector(`#${this.id}`);
        console.log("MagicElement const", this.element);
        console.log("dispatching element ready event");
        window.dispatchEvent(new index_js_1.ElementReadyEvent(this));
    }
    hydrate(vm, value) {
        this.value = value;
        vm.bind(this);
    }
    AddClass(names) {
        names.split(" ").map((c) => {
            this.classes.push(c);
        });
        return this;
    }
    getValue() {
        return this.value;
    }
    addEventTrigger(on, eventHandler) {
        // console.log("adding event trigger", on, target, eventHandler)
        document.getElementById(this.id)?.addEventListener(on, (event) => {
            if (this.vm) {
                eventHandler(this.vm, event);
            }
        });
        return this;
    }
}
exports.MagicElement = MagicElement;
class TextMagicElement extends MagicElement {
}
exports.TextMagicElement = TextMagicElement;
class ButtonMagicElement extends MagicElement {
    constructor(id) {
        super(id, "");
    }
    OnClick(eventHandler) {
        document.getElementById(this.id)?.addEventListener("click", (e) => {
            if (this.vm) {
                eventHandler(this.vm);
            }
        });
        return this;
    }
}
exports.ButtonMagicElement = ButtonMagicElement;
