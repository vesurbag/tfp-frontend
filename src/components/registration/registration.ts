import { Field, IFormFields } from 'core/form'

export interface IRegistrationFields extends IFormFields {
  firstName: Field
  lastName: Field
  password: Field
  confirmPassword: Field
  email: Field
  phone: Field
  accountType: Field
  city: Field

  // Model fields
}

export interface CitiesJSON {
  id: number
  key: string
  name: string
}
