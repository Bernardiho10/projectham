export declare class Cache {
    static cacheKey: string;
    static get(key: string, cacheFunc?: () => any): any;
    static set(key: string, value: any): void;
    static remove(key: string): void;
    static clear(): void;
}
