import Head from 'next/head'
import dynamic from 'next/dynamic'

const Admin = dynamic(import('../containers/Admin'), {
  ssr: false
})

export default ( ) => (
  <div>
    <Head>
      <title>Gatites perdides</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='static/global.css' rel='stylesheet' type='text/css' />
    </Head>
    <div>
      <Admin />
    </div>
  </div>
)
