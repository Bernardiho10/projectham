import { MagicElement } from "./elements/index.js";
export declare class ViewModel {
    id: string;
    PARAMS: URLSearchParams;
    constructor();
    hydrate(obj: Record<string, any>): void;
    bind(element: MagicElement): void;
    payload(): object;
    persist(): void;
}
export declare class BaseViewModel extends ViewModel {
    id: string;
    constructor(id: string);
}
