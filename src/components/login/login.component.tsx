import { Input, Field, IFormFields } from 'core/form'
import { required } from 'core/form/validators'
import { LoginForm } from './form'

interface ILoginFields extends IFormFields {
  email: Field
  password: Field
}

@observer
export class LoginComponent extends Component<{}, {}> {
  fields: ILoginFields
  form: LoginForm

  componentWillMount() {
    this.fields = {
      email: new Field(required()),
      password: new Field(required()),
    }
    this.form = new LoginForm(this.fields)
  }

  async handleSubmit(event: any) {
    event.preventDefault()
    const response = await this.form.submit()
    console.log(response)
  }

  render() {
    const { email, password } = this.fields

    return (
      <div className="block">
        <div className="reg__wrapper">
          <form className="reg__form" onSubmit={this.handleSubmit.bind(this)}>
            <Input label="Email" type="email" field={email} />
            <Input label="Пароль" type="password" field={password} />
            <div className="field">
              <label />
              <button className="btn btn_accent mw_fl" type="submit">
                Логин
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
