"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
/**
    m = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    mm = 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12
    mmm = Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
    mmmm = January, February, March, April, May, June, July, August, September, October, November, December
    yyyy = 2024
    yy = 24
    ds = 1st, 2nd, 3rd, 4th, ... 31st
    d = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... 31
    dd = 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ddd = Sun, Mon, Tue, Wed, Thu, Fri, Sat
    dddd = Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
    hh = 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12
    HH = 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
    ii = 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
    ss = 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
    tt = AM, PM
    t = A, P
    ttt = GMT, UTC, IST, BST, EDT, PDT
    tttt = Greenwich Mean Time, Coordinated Universal Time, Indian Standard Time, British Summer Time, Eastern Daylight Time, Pacific Daylight Time
**/
class DateFormatter {
    format(v, d) {
        const suffix = {
            1: "st",
            2: "nd",
            3: "rd",
            4: "th",
            5: "th",
            6: "th",
            7: "th",
            8: "th",
            9: "th",
            10: "th",
            11: "th",
            12: "th",
            13: "th",
            14: "th",
            15: "th",
            16: "th",
            17: "th",
            18: "th",
            19: "th",
            20: "th",
            21: "st",
            22: "nd",
            23: "rd",
            24: "th",
            25: "th",
            26: "th",
            27: "th",
            28: "th",
            29: "th",
            30: "th",
            31: "st"
        };
        const ampms = {
            "att": "AM",
            "at": "A",
            "ptt": "PM",
            "pt": "P"
        }; // tt, t
        const months = [
            {
                "mm": "01",
                "mmm": "Jan",
                "mmmm": "January"
            },
            {
                "mm": "02",
                "mmm": "Feb",
                "mmmm": "February"
            },
            {
                "mm": "03",
                "mmm": "Mar",
                "mmmm": "March"
            },
            {
                "mm": "04",
                "mmm": "Apr",
                "mmmm": "April"
            },
            {
                "mm": "05",
                "mmm": "May",
                "mmmm": "May"
            },
            {
                "mm": "06",
                "mmm": "Jun",
                "mmmm": "June"
            },
            {
                "mm": "07",
                "mmm": "Jul",
                "mmmm": "July"
            },
            {
                "mm": "08",
                "mmm": "Aug",
                "mmmm": "August"
            },
            {
                "mm": "09",
                "mmm": "Sep",
                "mmmm": "September"
            },
            {
                "mm": "10",
                "mmm": "Oct",
                "mmmm": "October"
            },
            {
                "mm": "11",
                "mmm": "Nov",
                "mmmm": "November"
            },
            {
                "mm": "12",
                "mmm": "Dec",
                "mmmm": "December"
            }
        ];
        const days = [
            {
                "ddd": "Sun",
                "dddd": "Sunday"
            },
            {
                "ddd": "Mon",
                "dddd": "Monday"
            },
            {
                "ddd": "Tue",
                "dddd": "Tuesday"
            },
            {
                "ddd": "Wed",
                "dddd": "Wednesday"
            },
            {
                "ddd": "Thu",
                "dddd": "Thursday"
            },
            {
                "ddd": "Fri",
                "dddd": "Friday"
            },
            {
                "ddd": "Sat",
                "dddd": "Saturday"
            }
        ];
        const ampm = function (d, f) {
            // @ts-ignore
            return d.getHours() >= 12 ? ampms["p" + f] : ampms["a" + f];
        };
        let date = new Date(v);
        d = d.replace("tt", ampm(date, "tt"));
        d = d.replace("t", ampm(date, "t"));
        d = d.replace("yyyy", date.getFullYear().toString());
        d = d.replace("yy", date.getFullYear().toString().slice(2));
        d = d.replace("mmmm", months[date.getMonth()]["mmmm"]);
        d = d.replace("mmm", months[date.getMonth()]["mmm"]);
        d = d.replace("mm", months[date.getMonth()]["mm"]);
        d = d.replace("m", date.getMonth().toString());
        d = d.replace("dddd", days[date.getDay()]["dddd"]);
        d = d.replace("ddd", days[date.getDay()]["ddd"]);
        // @ts-ignore
        d = d.replace("dd", String(date.getDate()).padStart(2, "0"));
        // @ts-ignore
        d = d.replace("ss", String(date.getSeconds()).padStart(2, "0"));
        // @ts-ignore
        d = d.replace("ds", `${date.getDate()}${suffix[date.getDate()]}`); //23rd
        d = d.replace("d", date.getDate().toString());
        let hh = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        // @ts-ignore
        d = d.replace("hh", String(hh).padStart(2, "0"));
        // @ts-ignore
        d = d.replace("HH", String(date.getHours()).padStart(2, "0"));
        // @ts-ignore
        d = d.replace("ii", String(date.getMinutes()).padStart(2, "0"));
        return d;
    }
}
exports.DateFormatter = DateFormatter;
