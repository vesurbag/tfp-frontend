import '../globals'
import 'tslib'

import { AppRouter } from 'core/router'

import 'assets/styles/style.less'

interface Props {}

export class App extends Component<Props, {}> {
  render() {
    return (
      <Provider>
        <AppRouter />
      </Provider>
    )
  }
}
