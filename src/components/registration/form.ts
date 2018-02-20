import { user } from 'core'
import { Form } from 'core/form'

export class RegistrationForm extends Form {
  submit() {
    if (!this.isValid()) {
      return Promise.resolve(false)
    }
    const data = this.serialize()

    return user.register(data)
  }
}
