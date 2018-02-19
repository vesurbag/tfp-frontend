import { CONFIG } from 'core/config'
import { http } from 'core/http'

// import { IRegistrationFields } from 'components/registration'

// const server = 'http://localhost:8080/api/'

export class UserStore {
  @observable isAuth: boolean = false
  token: string
  id: number
  email: string

  constructor() {
    this.checkAuth()
  }

  @action
  checkAuth() {
    const token = localStorage.getItem(CONFIG.nameKeyToken)
    token && http.get('users/profile', {
      headers: { Authorized: token },
    })
    return false

  }

  login(token: string) {
    localStorage.setItem(CONFIG.nameKeyToken, token)
    this.checkAuth()
  }

  logout() {
    localStorage.removeItem(CONFIG.nameKeyToken)
    this.checkAuth()
  }
}
