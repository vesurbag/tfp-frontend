export interface IUserInfo {
  publicId: number
  email: string
  firstName: string
  lastName: string
  accountType: IAccountType
}

export interface IAccountType {
  key: AccountKey
  name: string
}

export type AccountKey = 'model' | 'photographer' | 'barber' | 'visagiste'
