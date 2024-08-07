import { FormatterFactory } from "./formatters/factory.js";
import { InputMagicElement, MagicElement } from "./elements/index.js";
import { ElementReadyEvent, MagicChangeEvent } from "./events/index.js";
import { TableMagicElement } from "./elements/table.js";
export class ViewModel {
    constructor() {
        this.id = "";
        this.PARAMS = new URLSearchParams(location.search);
        window.addEventListener(MagicChangeEvent.Type, (event) => {
            if (event instanceof MagicChangeEvent) {
                if (event.oldValue != event.newValue) {
                    console.log("magic-change event received", event);
                    event.src.hydrate(this, event.newValue);
                }
            }
        });
        window.addEventListener(ElementReadyEvent.Type, (event) => {
            if (event instanceof ElementReadyEvent) {
                console.log(event.src.constructor.name);
                // console.log("setting vm on element", event.src.id, "to", this.id)
                event.src.vm = this;
            }
        });
    }
    hydrate(obj) {
        for (let p in this) {
            let el = this[p];
            if (el instanceof MagicElement) {
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
            if (element instanceof TableMagicElement) {
                element.render(element.value);
                return;
            }
            let value = element.value;
            const format = elem.getAttribute("data-magic-format");
            //date-yyyy-mm-dd
            if (format != null) {
                const f = format.slice(0, format.indexOf(","));
                const d = format.slice(format.indexOf(",") + 1); // additional data used for decorating
                value = new FormatterFactory(f).Format(value, d);
            }
            elem.textContent = value;
        }
    }
    payload() {
        let data = {};
        for (let e in this) {
            let element = this[e];
            if (element instanceof InputMagicElement) {
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
export class BaseViewModel extends ViewModel {
    constructor(id) {
        super();
        this.id = "";
        this.id = id;
    }
}
