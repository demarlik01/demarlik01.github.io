import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        background: #fff;
        text-align: center;
        margin: 0;
        border: 0;
      }

      a {
         text-decoration: none;
      }

      h1, h2, h3, h4 {
        cursor: pointer;
      }
    `}</style>
  </div>
)