import { Form } from 'core/form'
import { user } from 'core'

export class LoginForm extends Form {
  submit() {
    if (!this.isValid()) {
      return Promise.resolve({ success: false, token: null })
    }

    const data = this.serialize()
    return user.authenticate(data)
  }
}
