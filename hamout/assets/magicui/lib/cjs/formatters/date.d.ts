import type { Formatter } from "./index.ts";
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
export declare class DateFormatter implements Formatter {
    format(v: any, d: string): string;
}
