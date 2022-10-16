import { Html, Head, Main, NextScript } from 'next/document'

import { fontSerif } from '../util/config'

const Document = () => {
  return (
    <Html>
      <Head>
        <link href={fontSerif} rel={'stylesheet'} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
