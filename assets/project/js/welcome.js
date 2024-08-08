import { TextMagicElement } from "/assets/magicui/lib/esm/index.js";
import { UserViewModel } from "./user.js";
new class WelcomeViewModel extends UserViewModel {
    constructor(id) {
        super(id);
        this.Username = new TextMagicElement("name");
        this.Greeting = new TextMagicElement("greeting", "");
        console.log(this.Data);
        this.Username.hydrate(this, this.Data.name);
        this.Greeting.hydrate(this, `Welcome, ${this.Username.value}!`);
    }
}('welcome-view');
