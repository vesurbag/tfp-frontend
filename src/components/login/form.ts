import { Form } from 'core/form'
import { http } from 'core/http'

export class LoginForm extends Form {
  submit() {
    if (!this.isValid()) {
      return Promise.resolve({ success: false, token: null })
    }

    const data = this.serialize()
    return http.post('users/authenticate', data).then(({ data }) => data)
  }
}
