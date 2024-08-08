import { TextMagicElement } from "@boudev/magicui/lib/esm/index.js"
import { UserViewModel } from "./user.js";

new class WelcomeViewModel extends UserViewModel {
    Username = new TextMagicElement("name");
    Greeting = new TextMagicElement("greeting", "");
    
    constructor(id: string) {
          super(id);
          console.log(this.Data)
          this.Username.hydrate(this, this.Data.name);
          this.Greeting.hydrate(this, `Welcome, ${this.Username.value}!`);
    }
}('welcome-view')