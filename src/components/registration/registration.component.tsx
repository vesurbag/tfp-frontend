import { h, Component } from 'preact'
import { observable, action } from 'mobx'
import { observer } from 'mobx-preact'

import { RegistrationForm } from './registration.model'
import { Input } from 'core/form'

interface Props {
    path?: string
}

export class Registration extends Component<Props, {}> {
    form: RegistrationForm

    constructor(props: Props) {
        super(props)

        this.form = new RegistrationForm()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event: any) {
        event.preventDefault()
        console.log(this.form)
    }

    render() {
        const { name, email, username, password } = this.form

        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    field={name}
                />
                <button type='submit'>Submit</button>

                {name.value}
            </form>
        )
    }
}