import { Field } from '../field.model'

import * as cn from 'classnames'

interface Props {
  field: Field
  label: string
  type?: string
  service?: (str: string) => string
}

@observer
export class Input extends Component<Props, {}> {
  onChange(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault()
    this.props.field.onChange(e.currentTarget.value)
  }

  render() {
    const { field, label, type, service } = this.props

    return (
      <div className="field">
        <label>{label}</label>
        <input
          type={type || 'text'}
          value={service ? service(field.value) : field.value}
          onChange={e => this.onChange(e)}
          className={cn({ error: !field.isValid })}
        />
        <div className="field__error_msg">{field.errorMsg}</div>
      </div>
    )
  }
}
