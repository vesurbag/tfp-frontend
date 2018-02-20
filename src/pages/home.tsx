import { MainTemplate } from './templates'

interface Props {
  path?: string
}

export class HomePage extends Component<Props, {}> {
  render() {
    return <MainTemplate>Hello, i'm main page</MainTemplate>
  }
}
