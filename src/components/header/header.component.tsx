import { h, Component } from 'preact'

interface Props {

}

export class Header extends Component<Props, {}> {
    render() {
        return (
            <header>
                Hello, i'm header!
            </header>
        )
    }
}