import { FormatterFactory } from "./factory.js";
import { DateFormatter } from "./date.js";
import { MoneyFormatter } from "./money.js";
interface Formatter {
    format(v: any, d: string): string;
}
declare class DefaultFormatter implements Formatter {
    format(v: any, d: string): string;
}
export { FormatterFactory, DateFormatter, MoneyFormatter, DefaultFormatter };
export type { Formatter };
