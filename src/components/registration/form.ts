import { http } from 'core/http'
import { Form } from 'core/form'

export class RegistrationForm extends Form {
  submit() {
    if (!this.isValid()) {
      return Promise.resolve(false)
    }
    const data = this.serialize()

    return http
      .post('users/register', data)
      .then(data => console.log(data.data))
      .catch(() => false)
  }
}
