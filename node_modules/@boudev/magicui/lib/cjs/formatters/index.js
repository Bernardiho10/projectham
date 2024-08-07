"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFormatter = exports.MoneyFormatter = exports.DateFormatter = exports.FormatterFactory = void 0;
const factory_js_1 = require("./factory.js");
Object.defineProperty(exports, "FormatterFactory", { enumerable: true, get: function () { return factory_js_1.FormatterFactory; } });
const date_js_1 = require("./date.js");
Object.defineProperty(exports, "DateFormatter", { enumerable: true, get: function () { return date_js_1.DateFormatter; } });
const money_js_1 = require("./money.js");
Object.defineProperty(exports, "MoneyFormatter", { enumerable: true, get: function () { return money_js_1.MoneyFormatter; } });
class DefaultFormatter {
    format(v, d) {
        return v;
    }
}
exports.DefaultFormatter = DefaultFormatter;
