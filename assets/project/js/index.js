import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement, TextMagicElement } from "/assets/magicui/lib/esm/index.js";
import { UserViewModel } from "./user.js";
new class FormModel extends UserViewModel {
    constructor(id) {
        super(id);
        this.Id = new MagicElement("id");
        this.Email = new InputMagicElement("email");
        this.Password = new InputMagicElement("password");
        this.Button = new ButtonMagicElement("submit-btn").OnClick(this.save);
        this.FeedBack = new TextMagicElement("feedback", "");
        this.FormTitle = new TextMagicElement("form-title", "");
        this.FormTitle.hydrate(this, "Sign in to your account");
    }
    save(vm) {
        const vt = vm;
        const data = vm.payload();
        console.log("Data...", vt);
        if (vt.Email.value === vt.Data.email && vt.Password.value === vt.Data.password) {
            vt.FeedBack.hydrate(vt, "Login Successful");
            window.location.href = "welcome.html";
        }
        else {
            vt.FeedBack.hydrate(vt, "Invalid Username or Password");
        }
    }
}('form-page');
