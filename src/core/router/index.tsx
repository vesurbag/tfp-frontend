import { h, Component } from 'preact'
import Router from 'preact-router'

import { HomePage } from 'pages/home'
import { RegistrationRouter } from './registration.router'

export class AppRouter extends Component<{}, {}> {

    render() {
        return (
            <Router>
                <HomePage path='/' />
                <RegistrationRouter path='/registration/:*' />
            </Router>
        )
    }
}