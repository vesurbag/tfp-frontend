import { Field } from 'core/form'

export class RegistrationForm {
    name: Field
    email: Field
    username: Field
    password: Field

    constructor() {
        this.name = new Field()
        this.email = new Field()
        this.username = new Field()
        this.password = new Field()
    }

}