import { h, Component } from 'preact'

import { Field } from './field.model'

interface Props {
    field: Field
    type?: string
}

export class Input extends Component<Props, {}> {
    render() {
        const { field } = this.props

        return (
            <input
                type='text'
                value={field.value}
                onChange={
                    (event: any) => {
                        event.preventDefault()
                        field.value = event.target.value
                    }
                }
            />
        )
    }
}
