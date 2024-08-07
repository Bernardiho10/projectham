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
            console.log("Params...", vm)
            const data = vm.payload()
            console.log("Data...",   data, vm.PARAMS)
            console.log(this.Email, this.payload())
            if(this.Email.value === data && this.Password.value === data){
                this.FeedBack.hydrate(this, "Login Successful")
            } else {
                this.FeedBack.hydrate(this, "Invalid Username or Password")
            }
        }

}('form-page')