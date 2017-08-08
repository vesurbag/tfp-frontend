import { h, Component } from 'preact'

import { Header } from 'components/header'

interface Props {
    path?: string
}

export class HomePage extends Component<Props, {}> {
    render() {
        return (
            <div>
                <Header />
                <a href='registration'>Reg</a>
            </div>
        )
    }
}