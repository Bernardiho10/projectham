"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectInputMagicElement = exports.FloatInputMagicElement = exports.BooleanInputMagicElement = exports.DateInputMagicElement = exports.NumberInputMagicElement = exports.HiddenInputMagicElement = exports.InputMagicElement = void 0;
const index_js_1 = require("./index.js");
const index_js_2 = require("../events/index.js");
class InputMagicElement extends index_js_1.MagicElement {
    constructor(id, name) {
        super(id, name);
        this.element = null;
        this.element = document.querySelector(`#${this.id}`);
        if (this.element != null && this.isInputElement()) {
            let self = this;
            this.element.addEventListener("change", this.dispatchChange(self));
            this.element.addEventListener("keyup", this.dispatchChange(self));
            if (this instanceof DateInputMagicElement) {
                this.element?.addEventListener("focus", function (event) {
                    this.showPicker();
                });
            }
        }
    }
    dispatchChange(self) {
        return function () {
            let elemValue = this.value;
            if (this.type == "checkbox") {
                elemValue = this.checked;
            }
            if (self.value != elemValue) {
                console.log("dispatch magic change event", elemValue);
                window.dispatchEvent(new index_js_2.MagicChangeEvent(self, self.value, elemValue));
            }
        };
    }
    isInputElement() {
        return this.element instanceof HTMLInputElement ||
            this.element instanceof HTMLSelectElement ||
            this.element instanceof HTMLTextAreaElement;
    }
    hydrate(vm, value) {
        const oldValue = this.value;
        this.value = value;
        vm.bind(this);
        if (oldValue != value) {
            document.getElementById(`${this.id}`)?.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }
}
exports.InputMagicElement = InputMagicElement;
class HiddenInputMagicElement extends InputMagicElement {
}
exports.HiddenInputMagicElement = HiddenInputMagicElement;
class NumberInputMagicElement extends InputMagicElement {
    getValue() {
        return Number(super.getValue());
    }
}
exports.NumberInputMagicElement = NumberInputMagicElement;
class DateInputMagicElement extends InputMagicElement {
    getValue() {
        return new Date(super.getValue()).toJSON();
    }
}
exports.DateInputMagicElement = DateInputMagicElement;
class BooleanInputMagicElement extends InputMagicElement {
    constructor() {
        super(...arguments);
        this.value = false;
    }
    getValue() {
        return Boolean(super.getValue());
    }
}
exports.BooleanInputMagicElement = BooleanInputMagicElement;
class FloatInputMagicElement extends InputMagicElement {
    constructor() {
        super(...arguments);
        this.value = 0.00;
    }
    getValue() {
        return parseFloat(super.getValue());
    }
}
exports.FloatInputMagicElement = FloatInputMagicElement;
class SelectInputMagicElement extends InputMagicElement {
    constructor() {
        super(...arguments);
        this.element = null;
    }
    render(options) {
        options = this.transform(options);
        if (options.length == 0) {
            return null;
        }
        this.element = document.querySelector(`#${this.id}`);
        const elementIsSelect = this.element instanceof HTMLSelectElement;
        if (!elementIsSelect) {
            return null;
        }
        console.log("rendering select", this.id);
        if (this.element != null) {
            this.element.innerHTML = "";
            for (let opt of options) {
                let sOpt = document.createElement("option");
                sOpt.value = opt["value"];
                sOpt.label = opt["label"];
                this.element.appendChild(sOpt);
            }
        }
    }
    transform(data) {
        return data;
    }
}
exports.SelectInputMagicElement = SelectInputMagicElement;
