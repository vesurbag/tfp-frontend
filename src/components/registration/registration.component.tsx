import { history } from 'core'
import { Input, Select, Field } from 'core/form'
import { phoneMask } from 'core/form/service'
import { maxLength, minLength, required, compared } from 'core/form/validators'

import { IRegistrationFields, CitiesJSON } from './registration'
import { RegistrationForm } from './form'
import { Choose } from './choose.component'
import { loadCities } from './helper'

@observer
export class RegistrationComponent extends Component<{}, {}> {
  fields: IRegistrationFields
  form: RegistrationForm
  @observable error: string
  @observable cities: CitiesJSON[] = []

  componentWillMount() {
    const phoneErrMsg = 'Не корректный формат телефона'
    loadCities().then((cities: CitiesJSON[]) => this.setCities(cities))
    this.fields = {
      firstName: new Field(required(), minLength(2), maxLength(25)),
      lastName: new Field(),
      email: new Field(required()),
      phone: new Field(minLength(11, phoneErrMsg), maxLength(11, phoneErrMsg)),
      password: new Field(required()),
      confirmPassword: new Field(required()),
      accountType: new Field(required()),
      city: new Field(required()),
    }
    this.fields.confirmPassword.validators.push(
      compared(this.fields.password, 'Пароли не совпадают')
    )

    this.form = new RegistrationForm(this.fields)
  }

  setCities(cities: CitiesJSON[]) {
    this.cities = cities
  }

  async handleSubmit(event: any) {
    event.preventDefault()
    const response = await this.form.submit()
    if (response.success) {
      history.push('/login')
    }
  }

  render() {
    return (
      <div className="block">
        <h1 className="reg__heading global__heading">Регистрация</h1>
        <form className="reg__wrapper" onSubmit={this.handleSubmit.bind(this)}>
          <div className="reg__form">
            {this.error}
            <Input label="* Имя" field={this.fields.firstName} />
            <Input label="Фамилия" field={this.fields.lastName} />
            <Input label="* Пароль" type="password" field={this.fields.password} />
            <Input label="* Повторите пороль" type="password" field={this.fields.confirmPassword} />
            <Input label="* Email" type="text" field={this.fields.email} />
            <Input label="Номер телефона" field={this.fields.phone} service={phoneMask} />
            {this.cities && (
              <Select label="* Город" field={this.fields.city} options={this.cities} />
            )}
            <div className="field">
              <label />
              <button className="btn btn_accent mw_fl" type="submit">
                Зарегистрироваться
              </button>
            </div>
          </div>

          <div className="reg__form">
            <Choose field={this.fields.accountType} />
          </div>
        </form>
      </div>
    )
  }
}
