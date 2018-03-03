import { history } from 'core'
import { Input, Field, validators } from 'core/form'
import { IRegistrationFields } from './fields'
import { RegistrationForm } from './form'

interface Props {}

@observer
export class RegistrationStepOneComponent extends Component<Props, {}> {
  fields: IRegistrationFields
  form: RegistrationForm
  @observable error: string

  constructor(props: Props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    const { maxLength, minLength, required, compared } = validators
    this.fields = {
      firstName: new Field(required(), minLength(2), maxLength(25)),
      lastName: new Field(),
      email: new Field(required()),
      password: new Field(required()),
      confirmPassword: new Field(required()),
    }
    this.fields.confirmPassword.validators.push(
      compared(this.fields.password, 'Пароли не совпадают')
    )

    this.form = new RegistrationForm(this.fields)
  }

  async handleSubmit(event: any) {
    event.preventDefault()
    const response = await this.form.submit()
    if (response.success) {
      history.push('/login')
    }
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.fields

    return (
      <div className="block">
        <h1 className="reg__heading global__heading">Регистрация - шаг 1</h1>
        <div className="reg__wrapper">
          <form className="reg__form" onSubmit={this.handleSubmit}>
            {this.error}
            <Input label="Имя *" field={firstName} />
            <Input label="Фамилия" field={lastName} />
            <Input label="Пароль *" type="password" field={password} />
            <Input label="Повторите пороль *" type="password" field={confirmPassword} />
            <Input label="Email *" type="text" field={email} />
            <div className="field">
              <label />
              <button className="btn btn_accent mw_fl" type="submit">
                Продолжить
              </button>
            </div>
          </form>

          <div className="reg__info">Поля отмеченные звездочкой обязатенльы для заполнения (*)</div>
        </div>
      </div>
    )
  }
}
