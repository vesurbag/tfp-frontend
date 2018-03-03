import { Router, Route } from 'react-router-dom'
import { history } from 'core'

import { HomePage } from 'pages/home'
import { LoginPage } from 'pages/login'
import { ProfilePage } from 'pages/profile'
import { RegistrationPage } from 'pages/registration'

export class AppRouter extends Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <main>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/id:id" component={ProfilePage} />
        </main>
      </Router>
    )
  }
}
