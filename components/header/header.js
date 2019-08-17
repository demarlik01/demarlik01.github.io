import Link from 'next/link'

const headerStyle = {
  paddingBottom: 30,
  marginBottom: 20,
  borderBottom: '1px solid #DDD',
}

const menuStyle = {
  marginRight: 15
}

const Header = () => (
  <header style={headerStyle}>
    <Link href="/">
      <h1>Hyoseok Kim</h1>
    </Link>
    <div>
      <Link href="/posts">
        <a style={menuStyle}>Posts</a>
      </Link>
      <a style={menuStyle} href="https://github.com/demarlik01" target="_blank">GitHub</a>
      <a style={menuStyle} href="https://www.linkedin.com/in/hyoseok-kim" target="_blank">LinkedIn</a>
      <a style={menuStyle} href="mailto:hyoseockim@gmail.com" target="_blank">Email</a>
    </div>
  </header>
)

export default Header;