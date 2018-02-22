import { user } from 'core'

interface Props {}

@observer
export class HeaderComponent extends Component<Props, {}> {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          I'm logo!
        </Link>

        <nav className="header__nav">
          <li className="header__item">
            <Link to="/registration" className="header__link">
              Регистрация
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/login">
              Войти
            </Link>
          </li>
          {user.isAuth && (
            <li className="header__item">
              <Link className="header__link" to="/" onClick={() => user.logout()}>
                Выйти
              </Link>
            </li>
          )}
        </nav>

        <div className="header__account">
          {user.isAuth && <Link to={`/id${user.publicId}`}>Мой профиль</Link>}
        </div>
      </header>
    )
  }
}
