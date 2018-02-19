import { http } from 'core/http'
import { CONFIG } from 'core/config'

import { UserStore } from 'core/user'

interface Props {
  params: any
  user?: UserStore
}

export class ProfilePage extends Component<Props, {}> {
  componentWillMount() {
    http.get('users/profile', {
      headers: { Authorization: localStorage.getItem(CONFIG.nameKeyToken) },
    })
  }

  render() {
    console.log(this.props)
    return <div>asd</div>
  }
}
