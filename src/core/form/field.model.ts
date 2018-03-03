import { Validator } from './validators'

export class Field {
  @observable value: string = ''
  @observable isValid: boolean = true
  @observable errorMsg: string = ''
  validators: Validator[]

  constructor(...validators: Validator[]) {
    this.validators = validators
  }

  @action
  onChange(value: string) {
    this.value = value
    this.checkValid()
  }

  @action
  checkValid(): void {
    this.isValid = true
    this.errorMsg = ''

    this.validators.map(validator => {
      const fieldValid = validator(this.value)
      if (!fieldValid.isValid) {
        this.isValid = false
        this.errorMsg = fieldValid.msg
      }
    })
  }
}
