import { Field } from 'core/form'

export const required = (msg: string = 'Поле обязательно для заполнения'): Validator => (
  value: string
) => ({
  isValid: !!value,
  msg,
})

export const minLength = (
  minLength: number,
  msg: string = `Минимум симовлов: ${minLength}`
): Validator => (value: string) => ({
  isValid: !value || value.length >= minLength,
  msg,
})

export const maxLength = (
  maxLength: number,
  msg: string = `Максимум симовлов: ${maxLength}`
): Validator => (value: string) => ({ isValid: value.length <= maxLength, msg })

export const compared = (field: Field, msg: string = 'Поля не совпадают'): Validator => (
  value: string
) => ({
  isValid: value === field.value,
  msg,
})

export type Validator = (value: string) => { isValid: boolean; msg: string }
