import { BaseViewModel } from "@boudev/magicui/lib/esm/index.js"

interface user  {
    email: string,
    password: string,
    name: string,
    id?: string  
}

export class UserViewModel extends BaseViewModel {
    Data: user = {
        "email": "bernadarsikuoko@gmail.com",
        "password": "password123",
        "name": "Bernard Oko"
    }
    constructor(id: string) {
          super(id);
          this.hydrate(this.Data)
    }
}