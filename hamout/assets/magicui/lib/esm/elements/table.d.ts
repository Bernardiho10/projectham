import { ViewModel } from "../viewmodel.js";
import { MagicElement } from "./index.js";
import type { RenderableElement } from "./elements.js";
interface rowEvent {
    event: string;
    handler: (id: string, vm: ViewModel) => void;
}
interface rowAction {
    name: string;
    idColumn: string;
    eventHandler: (id: string, vm: ViewModel) => void;
    condition: (data: Record<string, any>) => boolean;
}
export interface multiRowAction {
    name: string;
    eventHandler: (selectedRows: Set<string>) => void;
}
export declare class TableMagicElement extends MagicElement implements RenderableElement {
    element: HTMLTableElement | null;
    rowEvent: rowEvent | undefined;
    links: Map<string, string>;
    rowActions: Array<rowAction>;
    multiRowActions: Array<multiRowAction>;
    showColumns: Set<string>;
    allowMultiRowSelection: string;
    selectedRows: Set<string>;
    transformer: (data: Array<Record<string, any>>) => Array<Record<string, any>>;
    render(data: Array<Record<string, any>>): void;
    renderRowLink(link: string, data: Record<string, any>): string;
    renderMultiRowActions(): void;
    getColAlias(col: string): string;
    getColName(col: string): string;
    transform(data: Array<Record<string, any>>): Array<Record<string, any>>;
    SetTransformer(transformer: (data: Array<Record<string, any>>) => Array<Record<string, any>>): TableMagicElement;
    SetRowEvent(event: string, handler: (id: string, vm: ViewModel) => void): TableMagicElement;
    SetCellLink(column: string, link: string): TableMagicElement;
    ShowColumns(columns: string): TableMagicElement;
    AddRowAction(name: string, idColumn: string, eventHandler: (id: string, vm: ViewModel) => void, condition?: (data: Record<string, any>) => boolean): TableMagicElement;
    AllowMultiRowSelection(idColumn: string, ...actions: multiRowAction[]): TableMagicElement;
    getPlaceholders(url: string): string[];
}
export {};
