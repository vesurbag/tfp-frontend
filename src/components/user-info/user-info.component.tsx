import { UserInfoStore } from './user-info.store'

interface Props {
  userPublicId: number
}

@observer
export class UserInfoComponent extends Component<Props, {}> {
  store: UserInfoStore

  constructor(props: Props) {
    super(props)
    this.store = new UserInfoStore(props.userPublicId)
  }

  render() {
    const { userInfo } = this.store
    if (!this.store.loaded) {
      return <div className="block">Loading...</div>
    }

    return (
      <div className="block">
        <div>Name: {userInfo.firstName}</div>
        <div>Surname: {userInfo.lastName}</div>
        <div>Email: {userInfo.email}</div>
      </div>
    )
  }
}
