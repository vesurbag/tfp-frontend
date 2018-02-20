import { LoginComponent } from 'components/login'

import { MainTemplate } from './templates'

export class LoginPage extends Component<{}, {}> {
  render() {
    return (
      <MainTemplate>
        <div className="layout__container">
          <LoginComponent />
        </div>
      </MainTemplate>
    )
  }
}
