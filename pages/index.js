import Page from '../layouts/page'

const imgStyle = {
  width: '300px',
  objectFit: 'cover',
}

export default () => (
  <Page>
    <img style={imgStyle} src={process.env.NODE_ENV === 'production' ? 'https://demarlikk01.github.io/blog' : '' + '/static/main.gif'}/>
  </Page>
)