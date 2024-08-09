import { BaseViewModel } from "/assets/magicui/lib/esm/index.js";
export class UserViewModel extends BaseViewModel {
    constructor(id) {
        super(id);
        this.Data = {
            "email": "bernadarsikuoko@gmail.com",
            "password": "password123",
            "name": "Bernard Oko",
        };
        this.hydrate(this.Data);
    }
}
