import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement,TextMagicElement } from "@boudev/magicui/lib/esm/index.js";

const user = {
    "email": "bernadarsikuoko@gmail.com",
    "password": "password123" 
}

new class FormModel extends BaseViewModel {
    Id = new MagicElement("id")
    Email = new InputMagicElement("email")
    Password = new InputMagicElement("password")
    Button = new ButtonMagicElement("submit-btn").OnClick(this.save)
    FeedBack = new TextMagicElement("feedback", "")
    FormTitle = new TextMagicElement("form-title", "")
        constructor(id: string){
            super(id)   
            this.Email.hydrate(this, user.email)
            this.Password.hydrate(this, user.password)
            this.FormTitle.hydrate(this, "Sign in to your account for")
        }

        save(vm: ViewModel): void{
            const vt = <FormModel>vm
            const data = vm.payload()
            console.log("Data...",   vt)
            if(vt.Email.value === data && vt.Password.value === data){
                vt.FeedBack.hydrate(vt, "Login Successful")
            } else {
                vt.FeedBack.hydrate(vt, "Invalid Username or Password")
            }
        }

}('form-page')