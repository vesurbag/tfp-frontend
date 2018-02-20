import { Router, Route, Switch } from 'react-router-dom'
import { history } from 'core'

import { HomePage } from 'pages/home'
import { RegistrationPage } from 'pages/registration'
import { LoginPage } from 'pages/login'
import { ProfilePage } from 'pages/profile'

export class AppRouter extends Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/id:id" component={ProfilePage} />
        </Switch>
      </Router>
    )
  }
}
