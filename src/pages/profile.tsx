import { MainTemplate } from './templates'

import { UserInfoComponent } from 'components/user-info'

interface Props {
  match?: any
}

export class ProfilePage extends Component<Props, {}> {
  componentWillMount() {}

  render() {
    const { params } = this.props.match
    return (
      <MainTemplate>
        <div className="layout__container">
          <UserInfoComponent userPublicId={params.id} />
        </div>
      </MainTemplate>
    )
  }
}
