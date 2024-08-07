"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableMagicElement = void 0;
const viewmodel_js_1 = require("../viewmodel.js");
const index_js_1 = require("./index.js");
const index_js_2 = require("../events/index.js");
class TableMagicElement extends index_js_1.MagicElement {
    constructor() {
        super(...arguments);
        this.element = null;
        this.links = new Map();
        this.rowActions = [];
        this.multiRowActions = [];
        this.showColumns = new Set();
        this.allowMultiRowSelection = "";
        this.selectedRows = new Set();
        this.transformer = function (data) {
            return data;
        };
    }
    render(data) {
        let vm = this.vm;
        if (data == null) {
            return;
        }
        let keys = [];
        if (data.length > 0) {
            data = this.transform(data);
            if (this.showColumns.size == 0) {
                keys = Object.keys(data[0]);
                keys.forEach((key) => {
                    this.showColumns.add(key);
                });
            }
        }
        if (this.showColumns.size > 0) {
            keys = Array.from(this.showColumns.keys());
        }
        console.log("rendering table", data);
        // @ts-ignore
        document.querySelector(`#${this.id}`).innerHTML = "";
        this.element = document.createElement("table");
        let thead = document.createElement("thead");
        thead.style.textTransform = "capitalize";
        thead.classList.add("table-dark");
        let tr = document.createElement("tr");
        if (this.allowMultiRowSelection != "" && data[0][this.allowMultiRowSelection] != undefined) {
            let th = document.createElement("th");
            let input = document.createElement("input");
            input.type = "checkbox";
            input.id = "checkbox-row-all";
            th.appendChild(input);
            tr.appendChild(th);
        }
        for (let i = 0; i < keys.length; i++) {
            let th = document.createElement("th");
            let col = this.getColAlias(keys[i]);
            th.textContent = col.replace("_", " ");
            tr.appendChild(th);
        }
        if (this.rowActions.length > 0) {
            let th = document.createElement("th");
            th.textContent = "";
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        this.element.appendChild(thead);
        let tbody = document.createElement("tbody");
        for (let i = 0; i < data.length; i++) {
            let tr = document.createElement("tr");
            if (this.allowMultiRowSelection != "" && data[0][this.allowMultiRowSelection] != undefined) {
                let td = document.createElement("td");
                let input = document.createElement("input");
                input.type = "checkbox";
                input.id = `checkbox-row-${i}`;
                input.value = data[i][this.allowMultiRowSelection];
                input.classList.add("multi-select-checkbox");
                td.appendChild(input);
                tr.appendChild(td);
            }
            for (let j = 0; j < keys.length; j++) {
                let td = document.createElement("td");
                let col = this.getColName(keys[j]);
                let val = data[i][col];
                if (this.links.has(col)) {
                    let href = this.renderRowLink(this.links.get(col) || "", data[i]);
                    td.innerHTML = `<a href="${href}">${val}</a>`;
                }
                else {
                    td.textContent = val;
                }
                if (data[i]["id"] != undefined) {
                    tr.id = data[i]["id"];
                    tr.style.cursor = "pointer";
                    if (this.rowEvent != undefined) {
                        tr.addEventListener(this.rowEvent.event, (event) => {
                            this.rowEvent?.handler(tr.id, new viewmodel_js_1.ViewModel());
                        });
                    }
                }
                tr.appendChild(td);
            }
            if (this.rowActions.length > 0) {
                let td = document.createElement("td");
                this.rowActions.map((action) => {
                    if (action.condition(data[i])) {
                        let a = document.createElement("a");
                        a.href = "#";
                        a.textContent = action.name;
                        if (data[i][action.idColumn] != undefined && vm != null) {
                            a.onclick = function (e) {
                                e.preventDefault();
                                action.eventHandler(data[i][action.idColumn], vm);
                            };
                        }
                        else {
                            console.log("id column not found", action.idColumn, data[i]);
                        }
                        a.classList.add(...["row-action", `${action.name.toLowerCase().replaceAll(" ", "-")}-action`]);
                        td.appendChild(a);
                    }
                });
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        this.element.appendChild(tbody);
        this.classes.map((className) => {
            this.element?.classList.add(className);
        });
        // attach event handlers for multi row selection
        this.element.querySelector("#checkbox-row-all")?.addEventListener("change", (e) => {
            console.log("check all", e);
            this.element?.querySelectorAll(".multi-select-checkbox").forEach((checkbox) => {
                if (checkbox instanceof HTMLInputElement && e.target instanceof HTMLInputElement) {
                    checkbox.checked = e.target.checked;
                    if (checkbox.checked) {
                        this.selectedRows.add(checkbox.value);
                    }
                    else {
                        this.selectedRows.delete(checkbox.value);
                    }
                }
            });
            this.renderMultiRowActions();
        });
        this.element.querySelectorAll(".multi-select-checkbox").forEach((checkbox) => {
            if (checkbox instanceof HTMLInputElement) {
                checkbox.addEventListener("change", (e) => {
                    console.log("checkbox changed", e);
                    if (checkbox.checked) {
                        this.selectedRows.add(checkbox.value);
                    }
                    else {
                        this.selectedRows.delete(checkbox.value);
                    }
                    this.renderMultiRowActions();
                });
            }
        });
        let multiActionContainer = document.createElement("div");
        multiActionContainer.id = "multi-action-container";
        document.querySelector(`#${this.id}`)?.appendChild(multiActionContainer);
        document.querySelector(`#${this.id}`)?.appendChild(this.element);
        window.dispatchEvent(new index_js_2.RenderCompleteEvent(this));
    }
    renderRowLink(link, data) {
        const placeholders = this.getPlaceholders(link);
        placeholders.map((placeholder) => {
            let col = placeholder.replace("[", "").replace("]", "");
            link = link.replace(placeholder, data[col]);
        });
        return link;
    }
    renderMultiRowActions() {
        if (this.selectedRows.size > 0) {
            // @ts-ignore
            document.querySelector("#multi-action-container").innerHTML = "";
            this.multiRowActions.map((action) => {
                let button = document.createElement("button");
                button.textContent = action.name;
                button.classList.add("btn", "btn-primary");
                button.addEventListener("click", (e) => {
                    action.eventHandler(this.selectedRows);
                });
                document.querySelector("#multi-action-container")?.appendChild(button);
            });
        }
        else {
            // @ts-ignore
            document.querySelector("#multi-action-container").innerHTML = "";
        }
    }
    getColAlias(col) {
        let s = col.split(":");
        if (s.length > 1) {
            return s[1];
        }
        return s[0];
    }
    getColName(col) {
        let s = col.split(":");
        return s[0];
    }
    transform(data) {
        console.log("transforming table", data);
        return this.transformer(data);
    }
    SetTransformer(transformer) {
        this.transformer = transformer;
        return this;
    }
    SetRowEvent(event, handler) {
        this.rowEvent = { event, handler };
        return this;
    }
    SetCellLink(column, link) {
        this.links.set(column, link);
        return this;
    }
    ShowColumns(columns) {
        columns.split(",").map((c) => {
            this.showColumns.add(c.trim());
        });
        return this;
    }
    AddRowAction(name, idColumn, eventHandler, condition) {
        if (condition == undefined) {
            condition = (data) => { return true; };
        }
        this.rowActions.push({ name, idColumn, eventHandler, condition });
        return this;
    }
    AllowMultiRowSelection(idColumn, ...actions) {
        this.allowMultiRowSelection = idColumn;
        actions.map((action) => {
            this.multiRowActions.push(action);
        });
        return this;
    }
    // if url is hello.html?id=[id], [id] is a placeholder
    getPlaceholders(url) {
        // Alternative syntax using RegExp constructor
        let placeholders = [];
        const regex = new RegExp('\\[\\w*\\]', 'g');
        let m;
        while ((m = regex.exec(url)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                placeholders.push(match);
            });
        }
        return placeholders;
    }
}
exports.TableMagicElement = TableMagicElement;
