"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRequest = exports.PostRequest = exports.GetRequest = exports.Fetch = void 0;
function Fetch(url, options) {
    return window.fetch(url, options).then((response) => {
        return response.json().then(data => {
            return { ok: response.ok, response: data };
        });
    }).then((data) => {
        if (!data.ok) {
            throw new Error(data.response.message);
        }
        return data.response;
    });
}
exports.Fetch = Fetch;
exports.GetRequest = { method: "GET", headers: { "Content-Type": "application/json" } };
exports.PostRequest = { method: "POST", headers: { "Content-Type": "application/json" } };
exports.DeleteRequest = { method: "DELETE", headers: { "Content-Type": "application/json" } };
