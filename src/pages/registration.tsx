import { RegistrationComponent } from 'components/registration'

import { MainTemplate } from './templates'

interface Props {
  path?: string
}

export class RegistrationPage extends Component<Props, {}> {
  render() {
    return (
      <MainTemplate>
        <div className="layout__container">
          <RegistrationComponent />
          <div className="block">123</div>
        </div>
        <div className="layout__container horizontal">
          <div className="block">Test Layout</div>
          <div className="block">Test 2</div>
        </div>
      </MainTemplate>
    )
  }
}
