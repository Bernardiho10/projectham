import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement, TextMagicElement } from "/assets/magicui/lib/esm/index.js";
const user = {
    "email": "bernadarsikuoko@gmail.com",
    "password": "password123"
};
new class FormModel extends BaseViewModel {
    constructor(id) {
        super(id);
        this.Id = new MagicElement("id");
        this.Email = new InputMagicElement("email");
        this.Password = new InputMagicElement("password");
        this.Button = new ButtonMagicElement("submit-btn").OnClick(this.save);
        this.FeedBack = new TextMagicElement("feedback", "");
        this.FormTitle = new TextMagicElement("form-title", "");
        this.Email.hydrate(this, user.email);
        this.Password.hydrate(this, user.password);
        this.FormTitle.hydrate(this, "Sign in to your account for");
    }
    save(vm) {
        console.log("Params...", vm);
        const data = vm.payload();
        console.log("Data...", data, vm.PARAMS);
        console.log(this.Email, this.payload());
        if (this.Email.value === data && this.Password.value === data) {
            this.FeedBack.hydrate(this, "Login Successful");
        }
        else {
            this.FeedBack.hydrate(this, "Invalid Username or Password");
        }
    }
}('form-page');
