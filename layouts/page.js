import Meta from '../components/meta'
import Header from '../components/header/header'

export default ({ children }) => (
  <div>
    <Meta />
    <Header />
    { children }
  </div>
)