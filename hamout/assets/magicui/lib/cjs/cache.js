"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Cache {
    static get(key, cacheFunc) {
        let item = localStorage.getItem(Cache.cacheKey);
        if (item !== null) {
            let cache = JSON.parse(item);
            if (cache[key] === undefined && cacheFunc !== undefined) {
                cache[key] = cacheFunc();
            }
            localStorage.setItem(Cache.cacheKey, JSON.stringify(cache));
            return cache[key] || null;
        }
        if (cacheFunc !== undefined) {
            let cache = JSON.parse("{}");
            cache[key] = cacheFunc();
            localStorage.setItem(Cache.cacheKey, JSON.stringify(cache));
            return cache[key] || null;
        }
        return null;
    }
    static set(key, value) {
        let item = localStorage.getItem(Cache.cacheKey);
        if (item !== null) {
            let cache = JSON.parse(item);
            cache[key] = value;
            localStorage.setItem(Cache.cacheKey, JSON.stringify(cache));
            return;
        }
        let cache = {};
        // @ts-ignore
        cache[key] = value;
        localStorage.setItem(Cache.cacheKey, JSON.stringify(cache));
    }
    static remove(key) {
        let item = localStorage.getItem(Cache.cacheKey);
        if (item !== null) {
            let cache = JSON.parse(item);
            delete cache[key];
            localStorage.setItem(Cache.cacheKey, JSON.stringify(cache));
        }
    }
    static clear() {
        localStorage.removeItem(Cache.cacheKey);
    }
}
exports.Cache = Cache;
Cache.cacheKey = "magic-cache";
