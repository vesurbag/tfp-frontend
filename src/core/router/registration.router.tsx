import { h, Component } from 'preact'
import Router from 'preact-router'

import { RegistrationPage } from 'pages/registration'

interface Props {
    path?: string
}

export class RegistrationRouter extends Component<Props, {}> {
    render() {
        return (
            <Router>
                <RegistrationPage path='/registration' />
            </Router>
        )
    }
}