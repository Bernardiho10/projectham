import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement,TextMagicElement } from "@boudev/magicui/lib/esm/index.js";
import { UserViewModel } from "./user.js";

new class FormModel extends UserViewModel {
    Id = new MagicElement("id")
    Email = new InputMagicElement("email")
    Password = new InputMagicElement("password")
    Button = new ButtonMagicElement("submit-btn").OnClick(this.save)
    FeedBack = new TextMagicElement("feedback", "")
    FormTitle = new TextMagicElement("form-title", "")
        constructor(id: string){
            super(id) 
            this.FormTitle.hydrate(this, "Sign in to your account")
        }

        save(vm: ViewModel): void{
            const vt = <FormModel>vm
            const data = vm.payload()
            console.log("Data...",   vt)
            if(vt.Email.value === vt.Data.email && vt.Password.value === vt.Data.password){
                vt.FeedBack.hydrate(vt, "Login Successful")
                
                window.location.href = "welcome.html"
            } else {
                vt.FeedBack.hydrate(vt, "Invalid Username or Password")
            }
        }

}('form-page')