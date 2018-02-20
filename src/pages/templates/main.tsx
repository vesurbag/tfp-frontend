import { HeaderComponent } from 'components/header'

interface Props {
  children?: React.ReactNode
}

export const MainTemplate = (props: Props) => (
  <div>
    <div className="layout__max">
      <HeaderComponent />
    </div>
    {props.children}
  </div>
)
