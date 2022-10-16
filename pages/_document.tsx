import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

const Document = () => {
  const { locale } = useRouter()

  return (
    <Html>
      <Head lang={locale} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
