import { TextMagicElement } from "/hamtask1/assets/magicui/lib/esm/index.js";
import { UserViewModel } from "./user.js";
new class WelcomeViewModel extends UserViewModel {
    constructor(id) {
        super(id);
        this.Username = new TextMagicElement("name");
        this.Greeting = new TextMagicElement("greeting", "");
        console.log(this.Data);
        this.checkToken();
    }
    checkToken() {
        // Implement token validation logic here
        console.log("Checking token...");
        const token = this.PARAMS.get("token");
        console.log("Token:", token);
        if (token) {
            console.log("Token valid!");
            if (token === 'tiktok') {
                this.Username.hydrate(this, this.Data.name);
                this.Greeting.hydrate(this, `Welcome, ${this.Username.value}!`);
            }
            else {
                window.location.href = 'http://localhost:4120/';
            }
        }
    }
}('welcome-view');
