import { http } from 'core'

import { IUserInfo } from './user-info'

export class UserInfoStore {
  @observable userInfo: IUserInfo
  @observable loaded: boolean = false

  constructor(userPublicId: number) {
    this.load(userPublicId)
  }

  @action
  load(publicId: number) {
    http.get(`users/user/${publicId}`).then(({ data }) => {
      if (data.success) {
        this.userInfo = data.user
        this.loaded = true
      } else {
        console.error(data.msg)
      }
    })
  }
}
