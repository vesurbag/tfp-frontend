import { http } from 'core/http'
import { CONFIG } from 'core/config'

// import { IRegistrationFields } from 'components/registration'

// const server = 'http://localhost:8080/api/'

export class UserStore {
  @observable isAuth: boolean = false
  authToken: string | null = null
  publicId: number | null = null

  constructor() {
    this.checkAuth()
  }

  checkAuth() {
    const token = localStorage.getItem(CONFIG.nameKeyToken)
    if (token) {
      http
        .get('users/authenticate/check', {
          headers: { Authorization: token },
        })
        .then(({ data }) => {
          this.updateData(true, token, data.publicId)
        })
        .catch(() => {
          console.error('Not Authorized by token')
          this.logout()
        })
    } else {
      this.logout()
    }
  }

  register(user: any) {
    return http.post('users/register', user).then(({ data }) => data)
  }

  authenticate(user: any) {
    return http.post('users/authenticate', user).then(({ data }) => {
      if (data.success) {
        localStorage.setItem(CONFIG.nameKeyToken, data.token)
        this.updateData(true, data.token, data.user.publicId)
      }
      return data
    })
  }

  logout() {
    localStorage.clear()
    this.updateData(false, null, null)
  }

  @action
  updateData(isAuth: boolean, token: string | null, publicId: number | null) {
    this.isAuth = isAuth
    this.authToken = token
    this.publicId = publicId
  }
}
