import type { Formatter } from "./index.js";
export declare class MoneyFormatter implements Formatter {
    /**
    const money = new Intl.NumberFormat('de-CH',
        { style:'currency', currency: 'CHF' });
    const percent = new Intl.NumberFormat('de-CH',
        { style:'percent', maximumFractionDigits: 1, signDisplay: "always"});
    which than can be used as:

        money.format(1234.50); // output CHF 1'234.50
    percent.format(0.083);  // output +8.3%
    **/
    format(v: any, d: string): string;
}
