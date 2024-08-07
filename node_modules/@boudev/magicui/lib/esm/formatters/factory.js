import { DefaultFormatter } from "./index.js";
import { MoneyFormatter } from "./money.js";
import { DateFormatter } from "./date.js";
export class FormatterFactory {
    constructor(type = "default") {
        switch (type) {
            case "money":
                this.instance = new MoneyFormatter();
                break;
            case "date":
                this.instance = new DateFormatter();
                break;
            default:
                this.instance = new DefaultFormatter();
                break;
        }
    }
    Format(v, data) {
        return this.instance.format(v, data);
    }
}
