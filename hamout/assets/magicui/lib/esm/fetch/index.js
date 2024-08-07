export function Fetch(url, options) {
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
export const GetRequest = { method: "GET", headers: { "Content-Type": "application/json" } };
export const PostRequest = { method: "POST", headers: { "Content-Type": "application/json" } };
export const DeleteRequest = { method: "DELETE", headers: { "Content-Type": "application/json" } };
