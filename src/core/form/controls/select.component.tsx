import * as cx from 'classnames'

import { Field } from '../field.model'
import { IFieldOptions } from './controls'

interface Props {
  field: Field
  label: string
  options: IFieldOptions[]
  text?: string
}

@observer
export class Select extends Component<Props, {}> {
  @observable showList: boolean = false

  onChange(option: IFieldOptions) {
    this.toggleList()
    this.props.field.onChange(option.key)
  }

  @action
  toggleList() {
    this.showList = !this.showList
  }

  render() {
    const { field, label, options, text } = this.props
    const matchedOption = options.find(option => option.key === field.value)

    return (
      <div className="field">
        <label>{label}</label>
        <div className="select">
          <div
            className={cx('select__first', {
              select__first_colored: !!matchedOption,
              select__first_opened: this.showList,
              select__first_error: !field.isValid,
            })}
            onClick={this.toggleList.bind(this)}
          >
            {matchedOption ? matchedOption.name : text || 'Нажмите чтобы выбрать...'}
          </div>
          <ul className={cx('select__options', { select__options_show: this.showList })}>
            {options.map(option => (
              <li onClick={() => this.onChange(option)} className="select__option" key={option.key}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="field__error_msg">{field.errorMsg}</div>
      </div>
    )
  }
}
