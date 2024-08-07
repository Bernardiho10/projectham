"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatterFactory = void 0;
const index_js_1 = require("./index.js");
const money_js_1 = require("./money.js");
const date_js_1 = require("./date.js");
class FormatterFactory {
    constructor(type = "default") {
        switch (type) {
            case "money":
                this.instance = new money_js_1.MoneyFormatter();
                break;
            case "date":
                this.instance = new date_js_1.DateFormatter();
                break;
            default:
                this.instance = new index_js_1.DefaultFormatter();
                break;
        }
    }
    Format(v, data) {
        return this.instance.format(v, data);
    }
}
exports.FormatterFactory = FormatterFactory;
