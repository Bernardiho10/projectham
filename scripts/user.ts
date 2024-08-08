import { BaseViewModel } from "@boudev/magicui/lib/esm/index.js"

export class UserViewModel extends BaseViewModel {
    Data = {
        "email": "bernadarsikuoko@gmail.com",
        "password": "password123",
        "name": "Bernard Oko"
    }
    constructor(id: string) {
          super(id);
          this.hydrate(this.Data)
    }
}