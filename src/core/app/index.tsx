import 'tslib'

import { h, Component } from 'preact'
import { AppRouter } from 'core/router'

interface Props {

}

export class App extends Component<Props, {}> {
    render() {
        return (
            <AppRouter />
        )
    }
}