import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from 'core'

import { HomePage } from 'pages/home'
import { RegistrationPage } from 'pages/registration'
import { LoginPage } from 'pages/login'
import { ProfilePage } from 'pages/profile'

import { RegistrationStepOneComponent } from 'components/registration'

export class AppRouter extends Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <RegistrationPage>
            <Switch>
              <Redirect exact from="/registration" to="/registration/step-1" />
              <Route path="/registration/step-1" component={RegistrationStepOneComponent} />
            </Switch>
          </RegistrationPage>
          <Route path="/login" component={LoginPage} />
          <Route path="/id:id" component={ProfilePage} />
        </Switch>
      </Router>
    )
  }
}
