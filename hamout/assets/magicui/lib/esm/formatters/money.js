export class MoneyFormatter {
    /**
    const money = new Intl.NumberFormat('de-CH',
        { style:'currency', currency: 'CHF' });
    const percent = new Intl.NumberFormat('de-CH',
        { style:'percent', maximumFractionDigits: 1, signDisplay: "always"});
    which than can be used as:

        money.format(1234.50); // output CHF 1'234.50
    percent.format(0.083);  // output +8.3%
    **/
    format(v, d) {
        console.log("decorating money", v, d);
        const formatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: d,
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        return formatter.format(v);
    }
}
