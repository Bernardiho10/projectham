"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseViewModel = exports.ViewModel = void 0;
const factory_js_1 = require("./formatters/factory.js");
const index_js_1 = require("./elements/index.js");
const index_js_2 = require("./events/index.js");
const table_js_1 = require("./elements/table.js");
class ViewModel {
    constructor() {
        this.id = "";
        this.PARAMS = new URLSearchParams(location.search);
        window.addEventListener(index_js_2.MagicChangeEvent.Type, (event) => {
            if (event instanceof index_js_2.MagicChangeEvent) {
                if (event.oldValue != event.newValue) {
                    console.log("magic-change event received", event);
                    event.src.hydrate(this, event.newValue);
                }
            }
        });
        window.addEventListener(index_js_2.ElementReadyEvent.Type, (event) => {
            if (event instanceof index_js_2.ElementReadyEvent) {
                console.log(event.src.constructor.name);
                // console.log("setting vm on element", event.src.id, "to", this.id)
                event.src.vm = this;
            }
        });
    }
    hydrate(obj) {
        for (let p in this) {
            let el = this[p];
            if (el instanceof index_js_1.MagicElement) {
                let parts = el.name.split(".");
                if (obj[parts[0]] != undefined) {
                    if (parts.length > 1) {
                        el.hydrate(this, obj[parts[0]][parts[1]]);
                    }
                    else {
                        el.hydrate(this, obj[parts[0]]);
                    }
                }
            }
            if (el instanceof ViewModel) {
                // console.log("hydrate", el)
                el.hydrate(obj[p.toLowerCase()]);
            }
        }
    }
    bind(element) {
        // console.log("bind", element)
        let elem = document.querySelector(`#${element.id}`);
        if (elem != null) {
            // todo handle checkboxes and radio buttons
            if (elem instanceof HTMLInputElement) {
                elem.setAttribute("value", element.value);
                return;
            }
            if (elem instanceof HTMLSelectElement) {
                for (let opt of elem.options) {
                    opt.selected = opt.value == element.value;
                }
                return;
            }
            if (element instanceof table_js_1.TableMagicElement) {
                element.render(element.value);
                return;
            }
            let value = element.value;
            const format = elem.getAttribute("data-magic-format");
            //date-yyyy-mm-dd
            if (format != null) {
                const f = format.slice(0, format.indexOf(","));
                const d = format.slice(format.indexOf(",") + 1); // additional data used for decorating
                value = new factory_js_1.FormatterFactory(f).Format(value, d);
            }
            elem.textContent = value;
        }
    }
    payload() {
        let data = {};
        for (let e in this) {
            let element = this[e];
            if (element instanceof index_js_1.InputMagicElement) {
                if (element.name != "") {
                    data[element.name] = element.getValue();
                }
            }
        }
        console.log("payload", data);
        return data;
    }
    persist() {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem(this.id, JSON.stringify(this.payload()));
        }
        else {
            //this.Log("No web storage support")
        }
    }
}
exports.ViewModel = ViewModel;
class BaseViewModel extends ViewModel {
    constructor(id) {
        super();
        this.id = "";
        this.id = id;
    }
}
exports.BaseViewModel = BaseViewModel;
