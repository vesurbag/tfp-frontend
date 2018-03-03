import { Field } from 'core/form'
import * as cx from 'classnames'

import { IAccountType } from 'components/user-info'

interface Props {
  field: Field
}

const accountTypes: IAccountType[] = [
  { name: 'Модель', key: 'model' },
  { name: 'Фотограф', key: 'photographer' },
  { name: 'Парикмахер', key: 'barber' },
]

@observer
export class Choose extends Component<Props, {}> {
  handleClick(type: IAccountType) {
    this.props.field.onChange(type.key)
  }

  getItemClassnames(type: IAccountType) {
    return cx('choose__item', `choose__item_${type.key}`, {
      choose__item_active: this.props.field.value === type.key,
    })
  }

  render() {
    const { field } = this.props

    return (
      <div className="field choose">
        <label className="choose__label">Тип деятельности</label>
        <ul className="choose__list">
          {accountTypes.map(type => (
            <li
              key={type.key}
              onClick={() => this.handleClick(type)}
              className={this.getItemClassnames(type)}
            >
              {type.name}
            </li>
          ))}
        </ul>
        <div className="field__error_msg">{field.errorMsg}</div>
      </div>
    )
  }
}
